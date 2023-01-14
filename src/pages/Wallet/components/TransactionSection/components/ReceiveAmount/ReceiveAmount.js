import { Button, InputAdornment } from "@mui/material";
import ButtonUi from "components/UiKit/ButtonUi";
import InputUi from "components/UiKit/InputUi";
import { getHistory } from "pages/Wallet/store/historySlice";
import { setWithdrawAmount } from "pages/Wallet/store/withdrawSlice";
import { clearError, setError } from "pages/Wallet/store/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setModal } from "store/ModalSlice";
import { number, object, string } from "yup";
import { selectWallets, updateOneWallet } from "store/slices/walletsSlice";

export default function ReceiveAmount({ type }) {
  const { isTfaActive } = useSelector((s) => s?.user?.user);
  const { currency } = useSelector((s) => s.wallet.coin);

  const dispatch = useDispatch();

  const { amount, address } = useSelector((s) => s.wallet.withdraw);
  const { amount: amountError } = useSelector((s) => s.wallet.error);

  const Wallets = useSelector(selectWallets);

  const {
    currency: { _id },
    fee,
  } = useSelector((s) => s.wallet.coin);

  const wallet = Wallets?.filter(
    ({ currency: { _id: w_id } }) => _id === w_id
  )[0];

  let schema = object().shape({
    address: string().required("address is required"),
    // .min(100, "wtf"),
    amount: number()
      .required("amount is required")
      .moreThan(fee, `must be more than ${fee} ${currency.ticker}`)
      .max(wallet?.activeBalance, "Insignificant Balance"),
  });

  const allHandler = () => {
    dispatch(setWithdrawAmount(wallet.activeBalance));
  };

  const onChangeHandler = (e) => {
    dispatch(setWithdrawAmount(e));
  };

  const refreshHandler = () => {
    dispatch(
      getHistory({ query: { action: type && type.toLowerCase(), limit: 10 } })
    );
  };

  const submitHandler = () => {
    dispatch(clearError());
    schema
      .validate({ address, amount }, { abortEarly: false })
      .then(() => {
        dispatch(
          setModal({
            visible: true,
            id: "TFAModale",
            doneCallback: () => {
              refreshHandler();
              dispatch(updateOneWallet({ selectId: wallet._id }));
            },
          })
        );
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ path, message }) => {
          errors[path] = message;
        });
        dispatch(setError(errors));
      });
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <InputUi
        value={amount}
        error={!!amountError}
        helperText={amountError}
        onChange={onChangeHandler}
        InputProps={{
          type: "number",
          classes: { input: "appearance-none" },
          className: "p-0",
          endAdornment: (
            <InputAdornment position="end" onClick={allHandler}>
              <Button className="font-bold">ALL</Button>
            </InputAdornment>
          ),
        }}
      />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex justify-between gap-[10px] text-[9px] w-full lg:w-[35%]">
          <div>Withdrawal Fee:</div>
          <div>
            {fee} {currency.ticker}
          </div>
        </div>
        <div className="flex justify-between gap-[10px] text-[9px] w-full lg:w-[35%] opacity-50">
          <div>you will receive:</div>
          <div>
            {amount && amount - fee > 0 ? amount - fee : 0} {currency.ticker}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        {!isTfaActive && (
          <div className="text-error text-[11px]">
            *requires a active 2FA. activate in{" "}
            <Link className="text-primary" to={`../../${"/profile"}`}>
              Account Settings
            </Link>
          </div>
        )}
        <ButtonUi
          disabled={!isTfaActive || !(amount && address)}
          variant="contained"
          onClick={submitHandler}
        >
          Withdraw
        </ButtonUi>
      </div>
    </div>
  );
}
