import { AlertTypes } from "constants/alertTypes.enum";
import { showAlert } from "store/AlertsSlice";
import { addLoader, deleteLoader } from "../LoadingSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "lib/axios";
import { cleanUser } from "store/userSlice";

const axiosService = (name) => {
  const get = ({ url, name, errorCallback }) => {
    return axiosHandler({ type: "get", url, name, errorCallback });
  };

  const post = ({ url, name, errorCallback }) => {
    return axiosHandler({ type: "post", url, name, errorCallback });
  };
  const put = ({ url, name, errorCallback }) => {
    return axiosHandler({ type: "put", url, name, errorCallback });
  };
  const deleteHandler = ({ url, name, errorCallback }) => {
    return axiosHandler({ type: "delete", url, name, errorCallback });
  };
  const patch = ({ url, name, errorCallback }) => {
    return axiosHandler({ type: "patch", url, name, errorCallback });
  };

  const axiosHandler = ({
    type,
    url: oldUrl,
    name: getName,
    errorCallback,
  }) => {
    const actionName = `${name}/${getName}`;
    return createAsyncThunk(actionName, async (oldBody, { dispatch }) => {
      dispatch(addLoader(actionName));
      const { url, body } = bodyHandler(oldUrl, oldBody);
      const result = await axios[type](url, body);
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
        dispatch(deleteLoader(actionName));
        return result;
      } else {
        dispatch(deleteLoader(actionName));
        return result;
      }
    });
  };

  return { axiosHandler, get, post, deleteHandler, patch };
};

const urlHandler = (url, { selectId, addedUrl, queries }) =>
  `${url}${selectId ? "/" + selectId : ""}${addedUrl ? "/" + addedUrl : ""}${
    queries ? `?${queries}` : ""
  }`;

const bodyHandler = (
  url,
  { query, selectId, addedUrl, formData: oldFormData, ...oldBody } = {}
) => {
  const formData = new FormData();

  oldFormData &&
    formData.entries(([key, value]) => {
      formData.append(key, value);
    });

  const body = oldFormData ? formData : { ...oldBody };

  const queries = query
    ? Object.entries(query)
        .map(([key, value]) =>
          key === "sortBy"
            ? `${value[0]}=${value[1]}&`
            : value && value !== "all"
            ? `${key}=${value}&`
            : ""
        )
        .join("")
    : "";
  const newUrl = urlHandler(url, { selectId, addedUrl, queries });
  return { url: newUrl, body };
};

export default axiosService;

export const axiosTypes = {
  Get: "get",
  Post: "post",
  Delete: "delete",
  Patch: "patch",
};
