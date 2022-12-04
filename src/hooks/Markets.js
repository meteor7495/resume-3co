import {createAsyncThunk} from "@reduxjs/toolkit";
import {addLoader, deleteLoader} from "../store/LoadingSlice";
import useAxios from "./useAxios";

const Markets = () => {
  const GetIndexMarkets = async ({url: oldUrl}) => {
    const axios = useAxios();
    const getName = "Markets";
    createAsyncThunk("Markets", async (oldBody, {dispatch}) => {
      dispatch(addLoader(getName));
      try {
        const {url, body} = bodyHandler(oldUrl, oldBody);
        const response = await axios.get(url);
        console.log('responseresponseresponseresponse',response)
        const data = (await response.data.data)
          ? response.data.data
          : response.data;
        dispatch(deleteLoader(getName));
        return data;
      } catch (error) {
        dispatch(deleteLoader(getName));
        return null;
      }
    });
  };
  return {
    GetIndexMarkets
  };
};
const urlHandler = (url, {selectId, addedUrl, queries}) =>
  `${url}${selectId ? "/" + selectId : ""}${addedUrl ? "/" + addedUrl : ""}${
    queries ? `?${queries}` : ""
  }`;

const bodyHandler = (url, body) => {
  const newBody = {...body};
  const query = newBody?.query ? {...newBody.query} : undefined;
  newBody?.query && delete newBody?.query;
  const selectId = newBody?.selectId ? newBody?.selectId : "";
  newBody?.query && delete newBody?.selectId;
  const addedUrl = newBody?.addedUrl ? newBody?.addedUrl : "";
  newBody?.query && delete newBody?.addedUrl;
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
  const newUrl = urlHandler(url, {selectId, addedUrl, queries});
  return {url: newUrl, body: newBody};
};
export default Markets;
