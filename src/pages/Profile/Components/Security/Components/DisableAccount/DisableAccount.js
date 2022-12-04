import React, {useEffect, useState} from "react";
import useStyles from "./DisableAccount.styles";
import {Checkbox, FormControlLabel, FormGroup, List, ListItem, Tooltip, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import InputUi from "../../../../../../components/UiKit/InputUi";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import {useDispatch, useSelector} from "react-redux";
import useAuth from "../../../../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {showAlert} from "../../../../../../store/AlertsSlice";
import {AlertTypes} from "../../../../../../constants/alertTypes.enum";
import * as yup from "yup";
import ModalUi from "../../../../../../components/UiKit/ModalUi";
import {setModal} from "../../../../../../store/ModalSlice";
import disableAccountLight from '../../../../../../assets/images/disableAccountLight.svg'
import disableAccountDark from '../../../../../../assets/images/disableAccountDark.svg'
import QRCodeUi from "../../../../../../components/UiKit/QRCodeUi";

const schema = yup.object({
  email: yup.string(),
  password: yup.string(),
}).required();

export default function DisableAccount() {
  const classes = useStyles();
  const {theme} = useSelector((s) => s.app);
  const activatePopUpImage = theme === 'light' ? disableAccountLight : disableAccountDark
  const [showPassword, setShowPassword] = useState(false)
  const {DisableAccount} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false)
  const [open, setOpen] = useState(false)
  const {control, register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = () => {
    checked && DisableAccount()
  };
  const notifyHandler = ({message, alertType, key}) => {
    dispatch(showAlert({notify: {message, type: alertType, visible: true, key},}));
  };
  useEffect(() => {
    Object.keys(errors).forEach(function (key, index) {
      setTimeout(() => {
        notifyHandler(errors[key].message, AlertTypes.danger, index)
      }, 100)
    });

  }, [errors])
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <ModalUi contentClassName={'pb-0'} maxWidth={'xs'} fullWidth={true} id={'disableAccount'}
             actions={
               <div className={'flex flex-col w-full'}>
                 <ButtonUi onClick={() => checked ? onSubmit() : ''} disabled={!checked} color={'error'} variant={'contained'}
                           className={`w-full h-[60px] mt-3 ${classes.button}`}>
                   Disable Account
                 </ButtonUi>
                 <ButtonUi onClick={() => dispatch(setModal({visible: false, modal: ''}))} variant={'text'}
                           className={`w-full h-[42px] mt-3 ${classes.button}`}>
                   Cancel
                 </ButtonUi>
               </div>
             }>
      <div className={'flex justify-center'}>
        <img src={activatePopUpImage}/>
      </div>
      <div className={'mt-5'}>
        <Typography className={'text-[1rem] font-[700]'} color={'text.primary'}>
          Disabling your account will lead to the following situations:
        </Typography>
        <List>
          <ListItem className={'px-0'}>
            <Typography className={'opacity-50 text-[1rem] font-[400]'}>
              1- The trading and login services in your account will be disabled.
            </Typography>
          </ListItem>
          <ListItem className={'px-0'}>
            <Typography className={'opacity-50 text-[1rem] font-[400]'}>
              2- The pending withdrawal requests will be canceled.
            </Typography>
          </ListItem>
          <ListItem className={'px-0'}>
            <Typography className={'opacity-50 text-[1rem] font-[400]'}>
              3- The unexecuted orders will be canceled.
            </Typography>
          </ListItem>
        </List>
      </div>
      <div className={'mt-3 flex'}>
        <Typography>
          If you want to reactivate your account after disabling, please submit ticket to our customer service.
        </Typography>
      </div>
      <div className={'mt-3 flex'}>
        <FormGroup>
          <FormControlLabel className={'text-[14px] font-[400] ' + classes.textColor}
                            control={<Checkbox onChange={() => setChecked(!checked)} size={'small'}/>} label="I’m sure for disabling my account."/>
        </FormGroup>
      </div>
    </ModalUi>
  );
}
