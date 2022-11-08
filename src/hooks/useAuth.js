import {useDispatch, useSelector} from 'react-redux';
import {cleanUser, setToken, setUser} from "../store/userSlice";
import {useState} from "react";
import useAxios from "../hooks/useAxios";
import { showAlert } from '../store/AlertsSlice';
import { AlertTypes } from '../constants/alertTypes.enum';

const useAuth = () => {
    const {user, token} = useSelector((state) => {
        return state.userInfo;
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
        let user = null;
        if (token && token.length > 0) {
            setIsLoading(true)
            user = await get('/user/profile');
            setIsLoading(false)
            if (user.unAuthorize === true) {
                logOut();
                return null
            }
        }
        dispatch(setUser(user));
        return user;
    };

    const login = async (loginCredentialsDTO) => {
        setIsLoading(true)
        let user = null;
        const response = await post('/user/login', loginCredentialsDTO);
        if (response !== null) {
            if (response.unVerified === true) {
                return {unVerified: true}
            }
            user = await handleUserResponse(response);
            dispatch(setUser(user));
        }
        setIsLoading(false)
        return user;
    };

    const registerUser = async (registerCredentialsDTO) => {
        setIsLoading(true)
        let user = null;
        const response = await post('/user/register', registerCredentialsDTO, {headers: {'Content-Type': 'multipart/form-data'}});
        if (response !== null) {
            user = await handleUserResponse(response);
            //dispatch(setUser(user));
        }
        setIsLoading(false)
        return user;
    };

    const updateUser = async (updateUserDTO) => {
        setIsLoading(true)
        let user = null;
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
        return user;
    };

    const updatePassword = async (updatePasswordDTO) => {
        setIsLoading(true)
        let user = null;
        const response = await post('/user/changePassword', updatePasswordDTO, {headers: {'Content-Type': 'multipart/form-data'}});
        if (response !== null) {
            dispatch(setUser(response));
            dispatch(showAlert({
                type: AlertTypes.success,
                message: 'update password successfully'
            }))
        }

        setIsLoading(false)
        return user;
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
        let user = null;
        const response = await post('/user/verfyEmail', verifyCodeDTO,
            {headers: {'Content-Type': 'multipart/form-data'}});
        if (response !== null) {
            user = await handleUserResponse(response);
            dispatch(setUser(user));
            dispatch(showAlert({
                type: AlertTypes.success,
                message: 'Email verified successfully'
            }))
        }

        setIsLoading(false)
        return user;
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
