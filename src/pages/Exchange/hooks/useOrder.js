import { AlertTypes } from "constants/alertTypes.enum";
import useAxios from "hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "store/AlertsSlice";
import { number } from "yup";
import { getOrderHistory } from "../store/orderHistorySlice";
import { getPairWallet } from "../store/pairsSlice";

export default function useOrder() {
  const { post } = useAxios();
  const dispatch = useDispatch();

  const postBuyOrder = async ({
    amount,
    activeBalance,
    selectedPair,
    pairId,
  }) => {
    let schema = number()
      .required()
      .min(1, "the minimum amount is 100 USDT")
      .max(activeBalance * 100, "Insignificant Balance");
    await schema
      .validate(amount)
      .then(async () => {
        const res = await post("market/buy/3co", {
          amount: amount.toCurrency(),
          pairCurrencyId: selectedPair,
        });
        dispatch(getPairWallet({ selectId: pairId }));
        dispatch(getOrderHistory({ selectId: selectedPair }));
        dispatch(
          showAlert({
            type: AlertTypes.success,
            result: "success",
            message: "Order Submitted successfully",
          })
        );
      })
      .catch((err) => {
        dispatch(
          showAlert({
            type: AlertTypes.danger,
            result: "Error",
            message: err.message,
          })
        );
      });
  };
  return { postBuyOrder };
}
