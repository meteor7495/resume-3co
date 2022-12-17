import { axios } from "../lib/axios";
import { cleanUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { showAlert } from "../store/AlertsSlice";
import { AlertTypes } from "../constants/alertTypes.enum";

const useAxios = () => {
  const dispatch = useDispatch();
  const get = async (url) => {
    let result = await axios.get(url);
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
    let result = await axios.post(url, data, config);
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
    let result = await axios.put(url, data, config);
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
