import { Button } from "@mui/material";
import { walletType } from "constants/walletType.enum copy";
import { generateAddress, setNetwork } from "pages/Wallet/store/coinSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../../styles";

export default function SelectNetwork({ type }) {
  const {
    currency: { _id: currencyId } = {},
    networks,
    network: selectedId,
  } = useSelector((s) => s.wallet.coin);
  const dispatch = useDispatch();
  const networkHandler = (_id) => {
    dispatch(setNetwork(_id));
    type === walletType.Deposit &&
      dispatch(generateAddress({ networkId: _id, currencyId }));
  };
  useEffect(() => {
    if (networks.length !== 0) {
      networkHandler(networks[0]?._id);
    }
  }, [networks]);
  return (
    <div
      className={`flex flex-nowrap flex-col lg:flex-row lg:flex-wrap gap-[10px]`}
    >
      {networks?.map(({ ticker, title, _id }, i) => (
        <NetworkBtn
          key={ticker}
          onClick={() => networkHandler(_id)}
          active={_id === selectedId}
          className="font-bold text-[12px]"
        >
          {ticker}
          <li className={`w-1 text-[10px] opacity-50`} />
          <span className={`text-[10px] font-normal opacity-50`}>{title}</span>
        </NetworkBtn>
      ))}
    </div>
  );
}

const NetworkBtn = ({ className, children, active, ...props }) => {
  const classes = useStyles();

  return (
    <Button
      {...props}
      className={`h-full flex gap-[4px] w-full lg:w-[calc(50%_-_10px)] rounded-[5px] h-[40px] px-[7px] justify-start gap-[10px] h-[45px] normal-case ${className} ${
        active
          ? `font-bold border border-solid ${classes.activeOverview}`
          : `${classes.button} ${classes.overview}`
      }`}
    >
      {children}
    </Button>
  );
};
