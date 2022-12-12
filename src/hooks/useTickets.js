import {useDispatch, useSelector} from 'react-redux';
import {cleanUser, setToken, setUser} from "../store/userSlice";
import {useState} from "react";
import useAxios from "../hooks/useAxios";
import {showAlert} from '../store/AlertsSlice';
import {AlertTypes} from '../constants/alertTypes.enum';
import {useNavigate} from 'react-router-dom'
import {setModal} from "../store/ModalSlice";

const useTickets = () => {

  const {user, token} = useSelector((state) => {
    return state.user;
  });
  const notifyHandler = ({message, alertType, key}) => {
    dispatch(showAlert({notify: {message, type: alertType, visible: true, key},}));
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {post, get, put} = useAxios();

  const [isLoading, setIsLoading] = useState(false);


  const getIssues = async () => {
    let data = null;
    if (token && token.length > 0) {
      setIsLoading(true)
      data = await get('/tickets/issues');
      setIsLoading(false)
    }
    return data;
  };
  const getTickets = async () => {
    let serverUser = null;
    if (token && token.length > 0) {
      setIsLoading(true)
      serverUser = await get('/tickets');
      setIsLoading(false)
    }
    return serverUser;
  };
  const getTicketDetails = async (TicketDTO) => {
    let serverUser = null;
    if (token && token.length > 0) {
      setIsLoading(true)
      serverUser = await get(`/tickets/${TicketDTO}`);
      setIsLoading(false)
    }
    return serverUser;
  };

  const submitTicket = async (submitTicketDTO) => {
    setIsLoading(true)
    let serverUser = null;
    const response = await post('/tickets', submitTicketDTO, {headers: {'Content-Type': 'multipart/form-data'}});
    if (response?.status === 'Success') {
      notifyHandler(
        {
          alertType: AlertTypes.success,
          key: 'success',
          visible: true,
          message: 'You registered successfully.'
        }
      )
      navigate('/message-center')
    }
    setIsLoading(false)
    return response;
  };

  const replyTicket = async (replyTicketDTO) => {
    setIsLoading(true)
    let serverUser = null;
    const response = await put(`/tickets/${replyTicketDTO}`, '',
      {headers: {'Content-Type': 'multipart/form-data'}});
    if (response !== null) {
      dispatch(showAlert({
        type: AlertTypes.success,
        message: 'update User successfully'
      }))
    }
    setIsLoading(false)
    return serverUser;
  };

  return {
    getIssues, getTickets, getTicketDetails, submitTicket, replyTicket,
  };
};
export default useTickets;
