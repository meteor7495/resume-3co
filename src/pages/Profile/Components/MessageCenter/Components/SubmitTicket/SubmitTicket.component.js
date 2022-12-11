import React, {useEffect, useState} from "react";
import useStyles from "./SubmitTicket.styles";

import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import useAuth from "../../../../../../hooks/useAuth";
import InputUi from "../../../../../../components/UiKit/InputUi";
import AutocompleteUi from "../../../../../../components/UiKit/AutocompleteUi";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import UploadFile from "../../../../../../components/UploadFile/UploadFile";
import ProgressBarUi from "../../../../../../components/UiKit/ProgressBarUi";
import FileSvg from "../../../../../../assets/icons/file.svg"
import CloseIcon from '@mui/icons-material/Close';

export default function YourPlatform(props) {
  const {theme} = useSelector((s) => s.app);
  const classes = useStyles();
  const methods = useFormContext();
  const {control, reset, formState, getValues} = methods;
  const {errors} = formState;
  const {updateUser, getUser} = useAuth();
  const {user} = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const [fileValue, setFileValue] = useState({});
  const onSubmit = data => {

  };
  useEffect(() => {
    reset(user);
  }, [user])
  useEffect(() => {
    console.log('fileValuefileValuefileValuefileValue', fileValue)
  }, [fileValue])
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <section className={"body-font h-[700px] lg:h-full"}>
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow w-full flex flex-col mb-16 md:mb-0 items-center">
            <div
              className={`flex flex-col w-full rounded-[10px] border border-solid ${classes.table}  ${classes.borderColor}`}>
              <div className={'flex justify-start p-5'}>
                <Typography className={`text-base ${classes.ticketTitle}`}>
                  Submit a Ticket
                </Typography>
              </div>
              <div className={'flex w-full justify-between flex-wrap p-5'}>
                <div className={'flex flex-col w-full lg:w-[48%] flex-wrap'}>
                  <div className={'w-full lg:w-[100%]'}>
                    <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
                      Please Select the Issue Type
                    </Typography>
                    <Controller
                      name="language"
                      control={control}
                      render={({field}) => <AutocompleteUi id={'language'} options={
                        [
                          {label: 'English', value: 'English'},
                        ]
                      } {...field} placeholder={'Language'} className={`${classes.inputStyle}`}/>}
                    />
                  </div>
                  <div className={'w-full mt-4'}>
                    <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
                      Description
                    </Typography>
                    <Controller
                      name="currency"
                      control={control}
                      render={({field}) => <InputUi
                        {...field}
                        className={classes.inputStyle}
                        sx={{height: 'auto!important'}}
                        multiline
                        rows={8}/>
                      }
                    />
                  </div>
                </div>
                <div className={'flex flex-col w-full lg:w-[48%] flex-wrap'}>
                  <div className={'w-full mt-4 lg:mt-0'}>
                    <Typography className={'mb-3 font-bold text-base flex'} color={'text.primary'}>
                      Coin <Typography color={'textColor.gray'} className={'ml-2'}>(Optional)</Typography>
                    </Typography>
                    <Controller
                      name="coin"
                      control={control}
                      render={({field}) => <InputUi
                        {...field}
                        className={classes.inputStyle}
                      />
                      }
                    />
                  </div>

                  <div className={'w-full mt-4'}>
                    <Typography className={'mb-3 font-bold text-base flex'} color={'text.primary'}>
                      Transaction ID <Typography color={'textColor.gray'} className={'ml-2'}>(Optional)</Typography>
                    </Typography>
                    <Controller
                      name="transactionId"
                      control={control}
                      render={({field}) => <InputUi
                        {...field}
                        className={classes.inputStyle}
                      />
                      }
                    />
                  </div>
                  <div className={'w-full mt-4'}>
                    <Typography className={'mb-3 font-bold text-base flex'} color={'text.primary'}>
                      Amount <Typography color={'textColor.gray'} className={'ml-2'}>(Optional)</Typography>
                    </Typography>
                    <Controller
                      name="amount"
                      control={control}
                      render={({field}) => <InputUi
                        {...field}
                        className={classes.inputStyle}
                      />
                      }
                    />
                  </div>
                  <div className={'w-full mt-4'}>
                    <Typography className={'mb-3 font-bold text-base flex'} color={'text.primary'}>
                      Deposit Address <Typography color={'textColor.gray'} className={'ml-2'}>(Optional)</Typography>
                    </Typography>
                    <Controller
                      name="amount"
                      control={control}
                      render={({field}) => <InputUi
                        {...field}
                        className={classes.inputStyle}
                      />
                      }
                    />
                  </div>
                </div>
                <div className={'w-full lg:w-[48%] mt-4'}>
                  <Typography className={'mb-3 font-bold text-base flex'} color={'text.primary'}>
                    Attachment <Typography color={'textColor.gray'} className={'ml-2'}>(Optional)</Typography>
                  </Typography>
                  <div
                    className={
                      `rounded-[5px] ${classes.uploadBox}`
                    }
                  >
                    {
                      fileValue?.file ?
                        <div className={'py-[15px] px-[30px] '}>
                          <div className={'flex justify-between mb-[10px] items-center'}>
                            <div className={'flex'}>
                              <img src={FileSvg} style={{width: 16, height: 20}}/>
                              <Typography color={'textColor.gray'} className={'ml-3'}>
                                theIssue16_2022_11_29.doc
                              </Typography>
                            </div>
                            <div className={'flex justify-end pr-3'}>
                              <ButtonUi onClick={() => setFileValue({})} sx={{
                                minWidth: 'auto',
                                minHeight: 'auto',
                                backgroundColor: 'transparent!important',
                                width: 11,
                                height: 11,
                                padding: 0
                              }} variant={'text'} color={'primary'}>
                                <CloseIcon/>
                              </ButtonUi>
                            </div>
                          </div>
                          <ProgressBarUi value={progress}/>
                        </div>
                        :
                        <Controller
                          name="currency"
                          control={control}
                          render={({field}) => <UploadFile onDrop={setFileValue}/>
                          }
                        />
                    }

                  </div>
                </div>
                <div className={'w-full flex justify-start'}>
                  <ButtonUi onClick={() => onSubmit(getValues())} variant={'contained'}
                            className={`w-full lg:w-[127px] h-[42px] mt-5 ${classes.button}`}>
                    Submit
                  </ButtonUi>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}