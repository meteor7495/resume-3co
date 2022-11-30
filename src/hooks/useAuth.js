import {useDispatch, useSelector} from 'react-redux';
import {cleanUser, setToken, setUser} from "../store/userSlice";
import {useState} from "react";
import useAxios from "../hooks/useAxios";
import {showAlert} from '../store/AlertsSlice';
import {AlertTypes} from '../constants/alertTypes.enum';
import {useNavigate} from 'react-router-dom'

const useAuth = () => {

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

  const handleUserResponse = (data) => {
    const {access_token, user} = data;
    dispatch(setToken(access_token));
    return access_token;
  }

  const getUser = async () => {
    let serverUser = null;
    if (token && token.length > 0) {
      setIsLoading(true)
      serverUser = await get('/user/profile');
      setIsLoading(false)
      if (serverUser.unAuthorize === true) {
        logOut();
        return null
      }
    }
    dispatch(setUser(serverUser));
    return serverUser;
  };

  const login = async (loginCredentialsDTO) => {
    setIsLoading(true)
    let serverUser = null;
    const response = await post('/user/signin', loginCredentialsDTO);
    if (response !== null) {
      serverUser = await handleUserResponse(response);
      dispatch(setUser(serverUser));
      dispatch(showAlert({
        notify: {
          type: AlertTypes.success,
          visible: true,
          message: 'You successfully signed in',
          key: 0
        }
      }))
      navigate('/')
    }
    setIsLoading(false)
    return response;
  };

  const registerUser = async (registerCredentialsDTO) => {
    setIsLoading(true)
    let serverUser = null;
    const response = await post('/user/signup', registerCredentialsDTO, {headers: {'Content-Type': 'multipart/form-data'}});
    if (response?.status === 'Success') {
      notifyHandler(
        {
          alertType: AlertTypes.success,
          key: 'success',
          visible: true,
          message: 'You registered successfully.'
        }
      )
      navigate('/verification-code?email=' + registerCredentialsDTO?.email)
    }
    setIsLoading(false)
    return response;
  };

  const updateUser = async (updateUserDTO) => {
    setIsLoading(true)
    let serverUser = null;
    const response = await put('/user/profile', updateUserDTO,
      {headers: {'Content-Type': 'multipart/form-data'}});
    if (response !== null) {
      dispatch(setUser(response));
      dispatch(showAlert({
        type: AlertTypes.success,
        message: 'update User successfully'
      }))
    }
    setIsLoading(false)
    return serverUser;
  };

  const updatePassword = async (updatePasswordDTO) => {
    setIsLoading(true)
    let serverUser = null;
    const response = await put('/user/profile/change-password', updatePasswordDTO, {headers: {'Content-Type': 'multipart/form-data'}});
    if (response !== null) {
      dispatch(setUser(response));
      dispatch(showAlert({
        type: AlertTypes.success,
        message: 'update password successfully'
      }))
    }

    setIsLoading(false)
    return serverUser;
  };

  const requestVerificationCode = async (requestVerificationCodeDTO) => {
    setIsLoading(true)
    const response = await post('/user/profile/verify', requestVerificationCodeDTO,
      {headers: {'Content-Type': 'multipart/form-data'}});
    if (response !== null) {
      dispatch(showAlert({
        type: AlertTypes.success,
        message: 'Verification Code sent Successfuly'
      }))
    }
    setIsLoading(false)
  };
  const requestResetPassword = async (requestVerificationCodeDTO) => {
    setIsLoading(true)
    const response = await post('/user/profile/reset-password', requestVerificationCodeDTO,
      {headers: {'Content-Type': 'multipart/form-data'}});
    if (response !== null) {
      dispatch(showAlert({
        type: AlertTypes.success,
        visible: true,
        message: 'An reset password email has been sent to your email.',
        key: 0
      }))
      navigate('/choose-password?email=' + requestVerificationCodeDTO?.email)
    }
    setIsLoading(false)
  };
  const resetPassword = async (requestVerificationCodeDTO) => {
    setIsLoading(true)
    const response = await put('/user/profile/reset-password', requestVerificationCodeDTO,
      {headers: {'Content-Type': 'multipart/form-data'}});
    if (response !== null) {
      dispatch(showAlert({
        type: AlertTypes.success,
        message: 'Verification Code sent Successfuly'
      }))
    }
    setIsLoading(false)
  };
  const TFAGenerator = async () => {
    setIsLoading(true)
    const response = await post('/user/tfa/generate', '',
      {headers: {'Content-Type': 'multipart/form-data'}});
    setIsLoading(false)
    return response
  };
  const TFAActivator = async (TFAActivatorDTO) => {
    setIsLoading(true)
    const response = await post('/user/tfa/active', TFAActivatorDTO,
      {headers: {'Content-Type': 'multipart/form-data'}});
    console.log('responseresponseresponseresponseresponse',response)
    setIsLoading(false)
    return response
  };
  const DisableAccount = async () => {
    setIsLoading(true)
    const response = await put('/user/account/disable', '',
      {headers: {'Content-Type': 'multipart/form-data'}});
    console.log('responseresponseresponseresponseresponse',response)
    setIsLoading(false)
    return response
  };

  const verifyCode = async (verifyCodeDTO) => {
    setIsLoading(true)
    let serverUser = null;
    const response = await post('/user/verify', verifyCodeDTO,
      {headers: {'Content-Type': 'multipart/form-data'}});
    if (response !== null) {
      serverUser = await handleUserResponse(response);
      dispatch(setUser(serverUser));
      dispatch(showAlert({
        type: AlertTypes.success,
        message: 'Email verified successfully'
      }))
    }

    setIsLoading(false)
    return serverUser;
  };

  const logOut = async () => {
    dispatch(cleanUser());
    window.location.assign(window.location.origin);
  };

  return {
    user, token, login, getUser, registerUser,
    logOut, updateUser, updatePassword, requestVerificationCode,
    verifyCode, isLoading, requestResetPassword, resetPassword, TFAGenerator, TFAActivator, DisableAccount
  };
};
export default useAuth;
