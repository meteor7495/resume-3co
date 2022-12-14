import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingUi from "../../../../components/UiKit/LoadingUi/LoadingUi";
import { walletType } from "../../../../constants/walletType.enum copy";
import VerticalStepper from "../VerticalStepper/VerticalStepper";
import ReceiveAmount from "./components/ReceiveAmount/ReceiveAmount";
import WithdrawalAddress from "./components/WithdrawalAddress/WithdrawalAddress";
import SelectCoin from "./components/SelectCoin/SelectCoin";
import SelectNetwork from "./components/SelectNetwork/SelectNetwork";
import DepositTo from "./components/DepositTo/DepositTo";
import { resetWithdraw } from "pages/Wallet/store/withdrawSlice";

export default function TransactionSection({ type }) {
  const dispatch = useDispatch();
  const [steps, setSteps] = useState();
  useEffect(() => {
    let steps = [
      {
        label: "Select Coin/Token",
        children: <SelectCoin type={type} />,
      },
      {
        label: "Select Network",
        children: <SelectNetwork type={type} />,
      },
    ];
    switch (type) {
      case walletType.Deposit:
        steps.push({
          label: "Deposit To",
          children: <DepositTo />,
        });
        break;
      case walletType.Withdraw:
        dispatch(resetWithdraw());
        steps.push(
          {
            label: "Withdrawal Address",
            children: <WithdrawalAddress />,
          },
          {
            label: "Receive Amount",
            children: <ReceiveAmount />,
          }
        );
        break;
      default:
        break;
    }
    setSteps(steps);
  }, [type]);

  return steps ? <VerticalStepper steps={steps} /> : <LoadingUi />;
}
