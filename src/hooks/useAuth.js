import {useDispatch, useSelector} from 'react-redux';
import {cleanUser, setToken, setUser} from "../store/userSlice";
import {useState} from "react";
import useAxios from "../hooks/useAxios";
import { showAlert } from '../store/AlertsSlice';
import { AlertTypes } from '../constants/alertTypes.enum';

const useAuth = () => {
    const {user, token} = useSelector((state) => {
        return state.user;
    });

    const dispatch = useDispatch();
    const {post, get} = useAxios();

    const [isLoading, setIsLoading] = useState(false);

    const handleUserResponse = (data) => {
        const {token, user} = data;
        dispatch(setToken(token));
        return user;
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
        const response = await post('/user/login', loginCredentialsDTO);
        if (response !== null) {
            if (response.unVerified === true) {
                return {unVerified: true}
            }
            serverUser = await handleUserResponse(response);
            dispatch(setUser(serverUser));
        }
        setIsLoading(false)
        return serverUser;
    };

    const registerUser = async (registerCredentialsDTO) => {
        setIsLoading(true)
        let serverUser = null;
        const response = await post('/user/register', registerCredentialsDTO, {headers: {'Content-Type': 'multipart/form-data'}});
        if (response !== null) {
            serverUser = await handleUserResponse(response);
            //dispatch(setUser(serverUser));
        }
        setIsLoading(false)
        return serverUser;
    };

    const updateUser = async (updateUserDTO) => {
        setIsLoading(true)
        let serverUser = null;
        const response = await post('/user/updateProfile', updateUserDTO,
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
        const response = await post('/user/changePassword', updatePasswordDTO, {headers: {'Content-Type': 'multipart/form-data'}});
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
        const response = await post('/user/sendVerificationCode', requestVerificationCodeDTO,
            {headers: {'Content-Type': 'multipart/form-data'}});
        if(response !== null){
            dispatch(showAlert({
                type: AlertTypes.success,
                message: 'Verification Code sent Successfuly'
            }))
        }
        setIsLoading(false)
    };

    const verifyCode = async (verifyCodeDTO) => {
        setIsLoading(true)
        let serverUser = null;
        const response = await post('/user/verfyEmail', verifyCodeDTO,
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

    return {user, token, login, getUser, registerUser,
        logOut, updateUser, updatePassword,requestVerificationCode,
        verifyCode,isLoading};
};
export default useAuth;
