import {useDispatch, useSelector} from 'react-redux';
import {cleanUser, setToken, setUser} from "../store/userSlice";
import {useState} from "react";
import useAxios from "../hooks/useAxios";
import {showAlert} from '../store/AlertsSlice';
import {AlertTypes} from '../constants/alertTypes.enum';
import {useNavigate} from 'react-router-dom'

const useAuth = () => {

  const {token} = useSelector((state) => {
    return state.user;
  });
  const notifyHandler = ({message, alertType, key}) => {
    dispatch(showAlert({notify: {message, type: alertType, visible: true, key},}));
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {post, get, put} = useAxios();

  const [isLoading, setIsLoading] = useState(false);

  const GetIndexMarkets = async () => {
    let data = null;
    if (token && token.length > 0) {
      setIsLoading(true)
      data = await get('/home');
      setIsLoading(false)
    }
    dispatch(setUser(serverUser));
    return serverUser;
  };


  return {
    GetIndexMarkets
  };
};
export default useAuth;
