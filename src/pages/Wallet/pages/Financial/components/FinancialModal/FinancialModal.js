import React, { useState } from "react";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import ModalUi from "../../../../../../components/UiKit/ModalUi";
import { useDispatch, useSelector } from "react-redux";
import InputUi from "../../../../../../components/UiKit/InputUi";
import { closeModal } from "../../../../../../store/ModalSlice";
import useStyles from "./styles";
import AutocompleteUi from "../../../../../../components/UiKit/AutocompleteUi/AutocompleteUi";

export default function FinancialModal({}) {
  const { selectedCoin: { baseTicker, pairTicker } = {} } = useSelector(
    (state) => state.app
  );
  const submitHandler = () => {};
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(closeModal());
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
        <AutocompleteUi options={options} />
        <AmountShow title="Spot Stock" value={671342.73} />
        <div className="font-bold">
          Amount <span className="font-normal text-error">(from Spot)</span>
        </div>
        <InputUi placeholder="Amount" />
        <AssetsSelect />
        <div className="flex gap-[10px] flex-col lg:flex-row justify-between ">
          <AmountShow title="Minimum Stake" value={1000} />
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
        {value.toLocaleString()} <span className="font-bold">USDT</span>
      </div>
    </div>
  );
};

const AssetsSelect = () => {
  const classes = useStyles();
  const className = `rounded-[2px] text-[14px] py-[5px] w-[calc(50%_-_10px)] text-center cursor-pointer flex-none lg:flex-1 ${classes.assetsSelect}`;
  return (
    <div className={`flex gap-[12px] flex-wrap`}>
      <div className={className}>25%</div>
      <div className={className}>50%</div>
      <div className={className}>75%</div>
      <div className={className}>100%</div>
    </div>
  );
};

const options = [
  { label: "USDT", value: "USDT" },
  { label: "BTC", value: "BTC" },
  { label: "3CO", value: "3CO" },
];
