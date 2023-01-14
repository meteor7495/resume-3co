import useAxios from "./useAxios";
import {useSelector} from "react-redux";
import Axios from "axios";

const UseMarkets = () => {
  const {token} = useSelector((state) => {
    return state.user;
  });
  const {post, get, put} = useAxios();
  const GetIndexMarketsWeekly = async (coin) => {
    let data = null
    data = await Axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7&interval=daily`);
    console.log('datadatadata',data)
    return data;
  };
  return {
    GetIndexMarketsWeekly
  };
};
export default UseMarkets;
