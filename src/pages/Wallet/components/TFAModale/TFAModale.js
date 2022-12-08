import React, { useState } from "react";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import ModalUi from "../../../../components/UiKit/ModalUi";
import securityLight from '../../../../assets/images/securityLight.svg'
import securityDark from '../../../../assets/images/securityDark.svg'
import { useDispatch, useSelector } from "react-redux";
import InputUi from "../../../../components/UiKit/InputUi";
import { CircularProgress } from "@mui/material";
import { TaskAlt } from "@mui/icons-material";
import { closeModal } from "../../../../store/ModalSlice";

export default function TFAModale({
}) {
  const { theme } = useSelector((s) => s.app);
  const activatePopUpImage = theme === 'light' ? securityLight : securityDark
  const [loading, setLoading] = useState();
  const [successful, setSuccessful] = useState();

  const submitHandler = () => {
    setLoading(!loading);
    setTimeout(() => {
      setSuccessful(true)
    }, 1500)
  }
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(closeModal())
  }
  return (
    <ModalUi id="TFAModale" maxWidth={'xs'} fullWidth actions={(
      <div className="flex flex-col w-full gap-[10px]" >
        {successful ?
          <ButtonUi onClick={closeHandler} color="textColor" className="text-primary" >Done</ButtonUi>
          :
          <>
            <ButtonUi onClick={submitHandler} variant="contained" >{loading ? <CircularProgress sx={{ color: '#fff' }} size={25} /> : "Submit"}</ButtonUi>
            <ButtonUi onClick={closeHandler} color="textColor" className="text-primary" >{loading ? <CircularProgress size={25} /> : "Cancel"}</ButtonUi>
          </>}
      </div>
    )}>
      <div className="flex flex-col gap-[20px]" >
        {successful ?
          <>
            <div className={'flex justify-center'}>
              <TaskAlt sx={{ fontSize: 90 }} color="primary" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="text-[15px] text-center font-bold" >Withdraw Successful!</div>
              <div className="text-[15px] text-center opacity-50" >Withdraw was submitted. for more information check out your Withdraw Records</div>
            </div>
          </>
          :
          <>
            <div className={'flex justify-center'}>
              <img src={activatePopUpImage} />
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="text-[15px] text-center font-bold" >Two-Factor Authentication</div>
              <div className="text-[15px] text-center opacity-50" >Enter your 6-digit code from your authenticator app.</div>
            </div>
            <div className="flex flex-col gap-[10px]" >
              <div className="text-[15px] font-bold">Enter 2FA Code:</div>
              <InputUi placeholder={"2FA Code"} />
            </div>
          </>}
      </div>
    </ModalUi>
  );
}
