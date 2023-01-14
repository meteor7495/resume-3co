import { AlertTypes } from "constants/alertTypes.enum";
import { showAlert } from "store/AlertsSlice";
import { addLoader, deleteLoader } from "../LoadingSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "lib/axios";
import { cleanUser } from "store/userSlice";

const axiosService = (name) => {
  const get = ({ ...props }) => {
    return axiosHandler({ type: "get", ...props });
  };

  const post = ({ ...props }) => {
    return axiosHandler({ type: "post", ...props });
  };
  const put = ({ ...props }) => {
    return axiosHandler({ type: "put", ...props });
  };
  const deleteHandler = ({ ...props }) => {
    return axiosHandler({ type: "delete", ...props });
  };
  const patch = ({ ...props }) => {
    return axiosHandler({ type: "patch", ...props });
  };

  const axiosHandler = ({
    type,
    url: oldUrl,
    name: getName,
    errorCallback,
    disabelLoading,
    dataHandler,
    urlTail,
  }) => {
    const actionName = `${name}/${getName}`;
    return createAsyncThunk(actionName, async (oldBody, { dispatch }) => {
      !disabelLoading && dispatch(addLoader(actionName));
      const { url, body } = bodyHandler(oldUrl, oldBody, urlTail);
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
        return dataHandler ? dataHandler(result, { dispatch }) : result;
      }
    });
  };

  return { axiosHandler, get, post, put, deleteHandler, patch };
};

const urlHandler = (url, { selectId, addedUrl, queries }, urlTail) =>
  `${url}${selectId ? `/${selectId}` : ""}${addedUrl ? `/${addedUrl}` : ""}${
    urlTail ? `/${urlTail}` : ""
  }${queries ? `?${queries}` : ""}`;

const bodyHandler = (
  url,
  { query, selectId, addedUrl, formData: oldFormData, ...oldBody } = {},
  urlTail
) => {
  const formData = new FormData();

  oldFormData &&
    Object.entries(oldFormData).map(([key, value]) =>
      formData.append(key, value)
    );

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
  const newUrl = urlHandler(url, { selectId, addedUrl, queries }, urlTail);
  return { url: newUrl, body };
};

export default axiosService;

export const axiosTypes = {
  Get: "get",
  Post: "post",
  Delete: "delete",
  Patch: "patch",
};
