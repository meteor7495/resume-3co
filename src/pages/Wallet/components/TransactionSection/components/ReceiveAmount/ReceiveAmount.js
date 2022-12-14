import { Button, InputAdornment } from "@mui/material";
import ButtonUi from "components/UiKit/ButtonUi";
import InputUi from "components/UiKit/InputUi";
import routes from "configs/routes";
import { selectWallets } from "pages/Wallet/store/walletsSlice";
import { setWithdrawAmount } from "pages/Wallet/store/withdrawSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setModal } from "store/ModalSlice";

export default function ReceiveAmount() {
  const { isTfaActive } = useSelector((s) => s?.user?.user);
  const dispatch = useDispatch();
  const { amount, address } = useSelector((s) => s.wallet.withdraw);
  const { currency } = useSelector((s) => s.wallet.coin);
  const Wallets = useSelector(selectWallets);
  const {
    currency: { _id },
  } = useSelector((s) => s.wallet.coin);
  const allHandler = () => {
    const wallet = Wallets.filter(
      ({ currency: { _id: w_id } }) => _id === w_id
    )[0];
    dispatch(setWithdrawAmount(wallet.activeBalance));
  };
  return (
    <div className="flex flex-col gap-[10px]">
      <InputUi
        value={amount}
        onChange={(e) => dispatch(setWithdrawAmount(e))}
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
          <div>0.08686 {currency.ticker}</div>
        </div>
        <div className="flex justify-between gap-[10px] text-[9px] w-full lg:w-[35%] opacity-50">
          <div>Deduction:</div>
          <div>0.00051 {currency.ticker}</div>
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
          onClick={() => dispatch(setModal({ visible: true, id: "TFAModale" }))}
        >
          Withdraw
        </ButtonUi>
      </div>
    </div>
  );
}
