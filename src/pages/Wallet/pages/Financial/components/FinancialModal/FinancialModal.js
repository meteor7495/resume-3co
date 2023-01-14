import React, { useEffect, useState } from "react";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import ModalUi from "../../../../../../components/UiKit/ModalUi";
import { useDispatch, useSelector } from "react-redux";
import InputUi from "../../../../../../components/UiKit/InputUi";
import { closeModal } from "../../../../../../store/ModalSlice";
import useStyles from "./styles";
import AutocompleteUi from "../../../../../../components/UiKit/AutocompleteUi/AutocompleteUi";
import bigInt from "utils/bigInt";
import { number } from "yup";
import { showAlert } from "store/AlertsSlice";
import { AlertTypes } from "constants/alertTypes.enum";
import useAxios from "hooks/useAxios";
import {
  getFinancialOverview,
  getFinancialList,
} from "pages/Wallet/store/financialSlice";
import { getWallets, selectWallets } from "store/slices/walletsSlice";

export default function FinancialModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWallets());
  }, [dispatch]);

  const Wallets = useSelector(selectWallets);
  const wallet = Wallets?.filter(
    ({ currency: { ticker } }) => ticker === "USDT"
  )[0];

  const activeBalance = wallet?.activeBalance;

  const [amount, setAmount] = useState("");
  const { portfolio, attention } = useSelector((s) => s.wallet.financial);
  let schema = number()
    .required()
    .min(100, "the minimum amount is 100 USDT")
    .max(activeBalance, "Insignificant Balance");
  const { post } = useAxios();
  const submitHandler = () => {
    schema
      .validate(amount)
      .then(async () => {
        const res = await post("financial/3co", {
          amount: amount.toCurrency(),
          paidCurrencyId: wallet.currency._id,
        });
        if (res?.status === "Success") {
          closeHandler();
          dispatch(getFinancialList());
          dispatch(getFinancialOverview());
          dispatch(
            showAlert({
              type: AlertTypes.success,
              message: "Deposit Successfully",
            })
          );
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
    setAmount("");
  };

  const amountHandler = (e) => {
    const value = e?.target?.value
      ? e?.target?.value
      : typeof e === "string" || typeof e === "number"
      ? e
      : "";
    // setAmount(parseFloat((+value).toFixed(8)));
    setAmount(value.toFixedNumber());
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
      <div
        className={`px-[10px] py-[16px] border border-solid rounded-[5px] text-center mb-[20px] ${classes.attentionWrapper}`}
      >
        <div className="max-w-[360px] m-auto text-[12px]" >
          Please deposit USDT into your spot wallet before transferring them to
          your Financial wallet and Invest in 3CO
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="font-bold">Coin</div>
        <AutocompleteUi
          options={options}
          value={{ label: "USDT", value: "USDT" }}
        />
        <AmountShow title="Spot Stock" value={activeBalance} unit="USDT" />
        <div className="font-bold">
          Amount <span className="font-normal text-error">(from Spot)</span>
        </div>
        <InputUi
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={amountHandler}
          onEnter={submitHandler}
        />
        <AssetsSelect value={activeBalance} onClick={amountHandler} />
        <div className="flex gap-[10px] flex-col lg:flex-row justify-between ">
          <AmountShow
            title="you will receive"
            unit={"3CO"}
            value={amount ? amount / 0.008 : 0}
            // value={amount ? +(amount / 0.008).toString().toCurrency() : 0}
          />
        </div>
        <div className="flex gap-[10px] flex-col lg:flex-row justify-between ">
          <AmountShow
            title="Minimum Stake"
            value={attention?.minimumStake}
            unit="USDT"
          />
          <AmountShow
            title="Available Share"
            value={portfolio?.remainingShares}
            unit="3CO"
          />
        </div>
      </div>
    </ModalUi>
  );
}

const AmountShow = ({ title, value, unit }) => {
  return (
    <div className="flex text-[13px] gap-[5px]">
      <div className="opacity-50">{title}:</div>
      <div className="text-primary">
        {value && bigInt(+value)} <span className="font-bold">{unit}</span>
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
