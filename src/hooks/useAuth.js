import { useDispatch, useSelector } from "react-redux";
import { cleanUser, setToken, setUser } from "../store/userSlice";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { showAlert } from "../store/AlertsSlice";
import { AlertTypes } from "../constants/alertTypes.enum";
import { useNavigate } from "react-router-dom";
import { setModal } from "../store/ModalSlice";

const useAuth = () => {
  const { user, token } = useSelector((state) => {
    return state.user;
  });
  const notifyHandler = ({ message, alertType, key }) => {
    dispatch(showAlert({ message, type: alertType, visible: true, key }));
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, get, put } = useAxios();

  const [isLoading, setIsLoading] = useState(false);

  const handleUserResponse = (data) => {
    const { access_token, user } = data;
    dispatch(setToken(access_token));
    return user;
  };

  const getUser = async () => {
    setIsLoading(true);
    let serverUser = null;
    if (token && token.length > 0) {
      serverUser = await get("/user/profile");
      if (serverUser.unAuthorize === true) {
        logOut();
        setIsLoading(false);
        return null;
      }
    }
    dispatch(setUser(serverUser));
    setIsLoading(false);
    return serverUser;
  };

  const login = async (loginCredentialsDTO) => {
    const response = await post("/user/signin", loginCredentialsDTO);
    if (response !== null) {
      console.log("responseresponseresponseresponseresponseresponse", response);
      let user = await handleUserResponse(response);
      notifyHandler({
        alertType: AlertTypes.success,
        message: "You successfully signed in",
        key: 0,
      });
      if (response?.user?.isTfaActive) {
        navigate("/two-factor-auth");
      } else {
        dispatch(setUser(user));
        navigate("/");
      }
    }
    return response;
  };
  const tfaSignIn = async (tfaSignInDTO) => {
    const response = await post("/user/tfa/login", tfaSignInDTO, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    let serverUser = null;
    if (response !== null) {
      serverUser = await handleUserResponse(response);
      dispatch(setUser(serverUser));
      navigate("/");
      return response;
    }
  };

  const registerUser = async (registerCredentialsDTO) => {
    const response = await post("/user/signup", registerCredentialsDTO, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response?.status === "Success") {
      notifyHandler({
        alertType: AlertTypes.success,
        key: "success",
        message: "You registered successfully.",
      });
      navigate("/verification-code?email=" + registerCredentialsDTO?.email);
    }
    return response;
  };

  const updateUser = async (updateUserDTO) => {
    let serverUser = null;
    const response = await put("/user/profile", updateUserDTO, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response !== null) {
      dispatch(setUser(response));
      notifyHandler({
        alertType: AlertTypes.success,
        message: "User updated successfully",
        key: 0,
      });
    }
    return serverUser;
  };

  const updatePassword = async (updatePasswordDTO) => {
    let serverUser = null;
    const response = await put(
      "/user/profile/change-password",
      updatePasswordDTO,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    if (response !== null) {
      notifyHandler({
        alertType: AlertTypes.success,
        message: "Password updated successfully",
        key: 0,
      });
    }
    return serverUser;
  };

  const requestVerificationCode = async (requestVerificationCodeDTO) => {
    const response = await post(
      "/user/profile/verify",
      requestVerificationCodeDTO,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    if (response !== null) {
      notifyHandler({
        alertType: AlertTypes.success,
        message: "Verification code sent Successfully",
        key: 0,
      });
    }
  };
  const requestResetPassword = async (requestVerificationCodeDTO) => {
    const response = await post(
      "/user/reset-password",
      requestVerificationCodeDTO,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    if (response !== null) {
      notifyHandler({
        alertType: AlertTypes.success,
        message: "An reset password email has been sent to your email.",
        key: 0,
      });
      navigate("/choose-password?email=" + requestVerificationCodeDTO?.email);
    }
  };
  const resendPassword = async (requestVerificationCodeDTO) => {
    const response = await post(
      "/user/resend-code",
      requestVerificationCodeDTO,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    if (response !== null) {
      notifyHandler({
        alertType: AlertTypes.success,
        message: "Verification Code sent Successfully",
        key: 0,
      });
      //navigate('/choose-password?email=' + requestVerificationCodeDTO?.email)
    }
  };
  const resetPassword = async (requestVerificationCodeDTO) => {
    const response = await put('/user/reset-password', requestVerificationCodeDTO,
      {headers: {'Content-Type': 'multipart/form-data'}});
    if (response !== null) {
      notifyHandler({
        alertType: AlertTypes.success,
        message: 'Your password changed successfully, Please Login',
        key:0
      })
      navigate('/login')
    }
  };
  const TFAGenerator = async () => {
    const response = await post("/user/tfa/generate", "", {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  };
  const TFAActivator = async (TFAActivatorDTO) => {
    let serverUser = null;
    const response = await post("/user/tfa/active", TFAActivatorDTO, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(setUser(response?.user));
    dispatch(setModal({ visible: false, id: "" }));
    return response;
  };
  const TFADeActivator = async (TFAActivatorDTO) => {
    const response = await put("/user/tfa/deactive", TFAActivatorDTO, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    await getUser();
    return response;
  };
  const DisableAccount = async () => {
    const response = await put("/user/profile/account/disable", "", {
      headers: { "Content-Type": "multipart/form-data" },
    });
    logOut()
  };

  const verifyCode = async (verifyCodeDTO) => {
    let serverUser = null;
    const response = await post("/user/verify", verifyCodeDTO, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response !== null) {
      serverUser = await handleUserResponse(response);
      dispatch(setUser(serverUser));
      notifyHandler({
        alertType: AlertTypes.success,
        message: "Email verified successfully",
        key: 0,
      });
      navigate("/");
    }
    return serverUser;
  };

  const logOut = async () => {
    dispatch(cleanUser());
    window.location.assign(window.location.origin);
  };

  return {
    user,
    token,
    login,
    getUser,
    registerUser,
    tfaSignIn,
    logOut,
    updateUser,
    updatePassword,
    requestVerificationCode,
    verifyCode,
    isLoading,
    requestResetPassword,
    resendPassword,
    resetPassword,
    TFAGenerator,
    TFAActivator,
    DisableAccount,
    TFADeActivator,
  };
};
export default useAuth;
