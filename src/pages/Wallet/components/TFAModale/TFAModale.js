import React, { useState } from "react";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import ModalUi from "../../../../components/UiKit/ModalUi";
import securityLight from "../../../../assets/images/securityLight.svg";
import securityDark from "../../../../assets/images/securityDark.svg";
import { useDispatch, useSelector } from "react-redux";
import InputUi from "../../../../components/UiKit/InputUi";
import { CircularProgress } from "@mui/material";
import { TaskAlt } from "@mui/icons-material";
import { closeModal } from "../../../../store/ModalSlice";
import useAxios from "hooks/useAxios";
import { string } from "yup";
import { showAlert } from "store/AlertsSlice";
import { AlertTypes } from "constants/alertTypes.enum";
import { getHistory } from "pages/Wallet/store/historySlice";

let schema = string()
  .required()
  .matches(/^[0-9]+$/, "Must be a number")
  .min(6, "Must be exactly 6 digits")
  .max(6, "Must be exactly 6 digits");

export default function TFAModale({}) {
  const { theme } = useSelector((s) => s.app);
  const { amount, address } = useSelector((s) => s.wallet.withdraw);
  const {
    network,
    currency: { _id: currencyId },
  } = useSelector((s) => s.wallet.coin);
  const { doneCallback } = useSelector((s) => s.modal);
  const activatePopUpImage = theme === "light" ? securityLight : securityDark;
  const [loading, setLoading] = useState();
  const [successful, setSuccessful] = useState();
  const [TFA, setTFA] = useState("");
  const { post } = useAxios();
  const submitHandler = async () => {
    if (!loading) {
      setLoading(true);
      await schema
        .validate(TFA)
        .then(async () => {
          const res = await post("wallet/spot/withdraw/request", {
            networkId: network,
            currencyId,
            amount,
            tfaCode: TFA,
            toAddress: address,
          });
          if (res?.status === "Success") {
            setSuccessful(true);
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

      setLoading(false);
    }
  };
  const dispatch = useDispatch();

  const closeHandler = () => {
    if (successful) {
      doneCallback && doneCallback();
      setSuccessful(false);
    }
    setTFA("");
    !loading && dispatch(closeModal());
  };
  return (
    <ModalUi
      id="TFAModale"
      maxWidth={"xs"}
      fullWidth
      onClose={closeHandler}
      actions={
        <div className="flex flex-col w-full gap-[10px]">
          {successful ? (
            <ButtonUi
              onClick={closeHandler}
              color="textColor"
              className="text-primary"
            >
              Done
            </ButtonUi>
          ) : (
            <>
              <ButtonUi
                disabled={!(TFA && amount && address)}
                onClick={submitHandler}
                variant="contained"
                loading={loading}
              >
                Submit
              </ButtonUi>
              <ButtonUi
                onClick={closeHandler}
                color="textColor"
                className="text-primary"
                loading={loading}
              >
                Cancel
              </ButtonUi>
            </>
          )}
        </div>
      }
    >
      <div className="flex flex-col gap-[20px]">
        {successful ? (
          <>
            <div className={"flex justify-center"}>
              <TaskAlt sx={{ fontSize: 90 }} color="primary" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="text-[15px] text-center font-bold">
                Withdraw Successful!
              </div>
              <div className="text-[15px] text-center opacity-50">
                Withdraw was submitted. for more information check out your
                Withdraw Records
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={"flex justify-center"}>
              <img src={activatePopUpImage} />
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="text-[15px] text-center font-bold">
                Two-Factor Authentication
              </div>
              <div className="text-[15px] text-center opacity-50">
                Enter your 6-digit code from your authenticator app.
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="text-[15px] font-bold">Enter 2FA Code:</div>
              <InputUi
                value={TFA}
                onChange={(e) => setTFA(e.target.value)}
                placeholder={"2FA Code"}
              />
            </div>
          </>
        )}
      </div>
    </ModalUi>
  );
}
