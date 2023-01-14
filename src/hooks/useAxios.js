import { axios } from "../lib/axios";
import { cleanUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { showAlert } from "../store/AlertsSlice";
import { AlertTypes } from "../constants/alertTypes.enum";
import {addLoader, deleteLoader} from "../store/LoadingSlice";

const useAxios = () => {
  const dispatch = useDispatch();
  const get = async (url) => {
    dispatch(addLoader(`get/${url}`))
    let result = await axios.get(url);
    dispatch(deleteLoader(`get/${url}`))
    if (result.status === "Failed") {
      if (result.unAuthorize === false) {
        dispatch(
          showAlert({
            type: AlertTypes.danger,
            result: "Error",
            message: result.message,
          })
        );
      } else if (result.unAuthorize === true) {
        window.location.assign(window.location.origin);
      } else if (result.unVerified === true) {
        dispatch(cleanUser());
        window.location.assign(window.location.origin + "/login");
      }
      return result;
    } else {
      return result;
    }
  };

  const post = async (url, data, config = {}) => {
    dispatch(addLoader(`post/${url}`))
    let result = await axios.post(url, data, config);
    dispatch(deleteLoader(`post/${url}`))
    if (result?.status === "Failed") {
      dispatch(
        showAlert({
          type: AlertTypes.danger,
          visible: true,
          message: result?.error,
          key: 0,
        })
      );
      return null;
    } else {
      return result;
    }
  };
  const put = async (url, data, config = {}) => {
    dispatch(addLoader(`put/${url}`))
    let result = await axios.put(url, data, config);
    dispatch(deleteLoader(`put/${url}`))
    if (result?.status === "Failed") {
      dispatch(
        showAlert({
          type: AlertTypes.danger,
          visible: true,
          message: result?.error,
          key: 0,
        })
      );
      return null;
    } else {
      return result;
    }
  };

  return { get, post, put };
};
export default useAxios;
