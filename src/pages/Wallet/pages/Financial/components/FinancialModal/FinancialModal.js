import React, { useEffect, useState } from "react";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import ModalUi from "../../../../../../components/UiKit/ModalUi";
import { useDispatch, useSelector } from "react-redux";
import InputUi from "../../../../../../components/UiKit/InputUi";
import { closeModal } from "../../../../../../store/ModalSlice";
import useStyles from "./styles";
import AutocompleteUi from "../../../../../../components/UiKit/AutocompleteUi/AutocompleteUi";
import { getWallets, selectWallets } from "pages/Wallet/store/walletsSlice";
import bigInt from "utils/bigInt";
import { number } from "yup";
import { showAlert } from "store/AlertsSlice";
import { AlertTypes } from "constants/alertTypes.enum";
import useAxios from "hooks/useAxios";
import { getFinancial } from "pages/Wallet/store/financialSlice";

export default function FinancialModal({}) {
  const { selectedCoin: { baseTicker, pairTicker } = {} } = useSelector(
    (state) => state.app
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWallets());
  }, []);

  const Wallets = useSelector(selectWallets);
  const wallet = Wallets?.filter(
    ({ currency: { ticker } }) => ticker === "USDT"
  )[0];
  const [amount, setAmount] = useState("");

  let schema = number()
    .required()
    // .matches(/^[0-9]+$/, "Must be a number")
    .min(100, "the minimum amount is 100 USDT")
    .max(wallet?.activeBalance, "Insignificant Balance");
  const { post } = useAxios();
  const submitHandler = () => {
    schema
      .validate(amount)
      .then(async () => {
        const res = await post("financial/3co", {
          tetherAmount: amount,
        });
        if (res?.status === "Success") {
          dispatch(closeModal());
          dispatch(getFinancial());
          // setSuccessful(true);
        }
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

  const closeHandler = () => {
    dispatch(closeModal());
  };

  const amountHandler = (e) => {
    const value = e?.target?.value
      ? e?.target?.value
      : typeof e === "string" || typeof e === "number"
      ? e
      : "";
    setAmount(value);
  };
  return (
    <ModalUi
      id="FinancialModal"
      fullWidth
      actions={
        <div className="flex flex-col w-full gap-[10px]">
          <ButtonUi onClick={submitHandler} variant="contained">
            Submit
          </ButtonUi>
          <ButtonUi
            onClick={closeHandler}
            color="textColor"
            className="text-primary"
          >
            Cancel
          </ButtonUi>
        </div>
      }
    >
      <div className="flex flex-col gap-[10px]">
        <div className="font-bold">Coin</div>
        <AutocompleteUi
          options={options}
          value={{ label: "USDT", value: "USDT" }}
        />
        <AmountShow title="Spot Stock" value={wallet?.activeBalance} />
        <div className="font-bold">
          Amount <span className="font-normal text-error">(from Spot)</span>
        </div>
        <InputUi value={amount} placeholder="Amount" onChange={amountHandler} />
        <AssetsSelect value={wallet?.activeBalance} onClick={amountHandler} />
        <div className="flex gap-[10px] flex-col lg:flex-row justify-between ">
          <AmountShow title="Minimum Stake" value={100} />
          <AmountShow title="Availabe Share" value={124623.135} />
        </div>
      </div>
    </ModalUi>
  );
}

const AmountShow = ({ title, value }) => {
  return (
    <div className="flex text-[13px] gap-[5px]">
      <div className="opacity-50">{title}:</div>
      <div className="text-primary">
        {value && bigInt(+value)} <span className="font-bold">USDT</span>
      </div>
    </div>
  );
};

const AssetsSelect = ({ value, onClick }) => {
  const classes = useStyles();
  const className = `rounded-[2px] text-[14px] py-[5px] w-[calc(50%_-_10px)] text-center cursor-pointer flex-none lg:flex-1 ${classes.assetsSelect}`;
  const clickHandler = (x) => {
    const newValue = +value * x;
    onClick && onClick(newValue);
  };
  return (
    <div className={`flex gap-[12px] flex-wrap`}>
      <div onClick={() => clickHandler(1 / 4)} className={className}>
        25%
      </div>
      <div onClick={() => clickHandler(1 / 2)} className={className}>
        50%
      </div>
      <div onClick={() => clickHandler(3 / 4)} className={className}>
        75%
      </div>
      <div onClick={() => clickHandler(1)} className={className}>
        100%
      </div>
    </div>
  );
};

const options = [{ label: "USDT", value: "USDT" }];
