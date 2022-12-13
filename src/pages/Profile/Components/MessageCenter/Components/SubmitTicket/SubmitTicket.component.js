import React, {useEffect, useState} from "react";
import useStyles from "./SubmitTicket.styles";

import {useDispatch, useSelector} from "react-redux";
import {Autocomplete, TextField, Typography} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import InputUi from "../../../../../../components/UiKit/InputUi";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import UploadFile from "../../../../../../components/UploadFile/UploadFile";
import FileSvg from "../../../../../../assets/icons/file.svg"
import CloseIcon from '@mui/icons-material/Close';
import {getIssues} from "../../Store/issuesSlice";
import {saveTicket} from "../../Store/ticketSlice";
import {selectCoins} from "store/slices/CoinsSlice";
import {useNavigate} from "react-router-dom";

export default function YourPlatform(props) {
  const classes = useStyles();
  const methods = useFormContext();
  const {control, reset, getValues} = methods;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fileValue, setFileValue] = useState({});
  const {issues} = useSelector((s) => s.messageCenter);
  const coins = useSelector(selectCoins);
  useEffect(() => {
    dispatch(getIssues());
    console.log('coinscoinscoinscoinscoins',coins)
  }, []);
  const onSubmit = data => {
    delete data.issue?.label;
    data.issue = data.issue?.value;
    delete data.coin?.label;
    data.coin = data.coin?.value;
    data.attachment = fileValue?.file
    Object.entries(data)
      .map(([key, value]) => {
        if(value === undefined){
          delete data[key]
        }
      });
    dispatch(saveTicket({formData: data})).then(() => {
      navigate('/profile/message-center')
    });
  };
  const options = issues?.map((item) => {
    return {
      label: item?.title,
      value: item?._id
    }
  })
  const coinOptions = coins?.map((item) => {
    return {
      label: item?.title,
      value: item?._id
    }
  })
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
                      name="issue"
                      control={control}
                      render={({field}) => {
                        console.log('fieldfieldfieldfieldfieldfield', field)
                        return <Autocomplete
                          {...field}
                          className={`${classes.inputStyle}`}
                          freeSolo
                          id="issue"
                          onChange={(e, value) => {
                            return field?.onChange(value)
                          }}
                          disableClearable
                          value={field?.value || null}
                          options={
                            options
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              className={`${classes.inputStyle}`}
                              InputProps={{
                                ...params.InputProps,
                                type: 'search',
                              }}
                            />
                          )}
                        />
                      }}
                    />
                  </div>
                  <div className={'w-full mt-4'}>
                    <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
                      Description
                    </Typography>
                    <Controller
                      name="description"
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
                      render={({field}) => {
                        console.log('fieldfieldfieldfieldfieldfield', field)
                        return <Autocomplete
                          {...field}
                          className={`${classes.inputStyle}`}
                          freeSolo
                          id="coin"
                          onChange={(e, value) => {
                            return field?.onChange(value)
                          }}
                          disableClearable
                          value={field?.value || null}
                          options={
                            coinOptions
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              className={`${classes.inputStyle}`}
                              InputProps={{
                                ...params.InputProps,
                                type: 'search',
                              }}
                            />
                          )}
                        />
                      }}
                    />
                  </div>

                  <div className={'w-full mt-4'}>
                    <Typography className={'mb-3 font-bold text-base flex'} color={'text.primary'}>
                      Transaction ID <Typography color={'textColor.gray'} className={'ml-2'}>(Optional)</Typography>
                    </Typography>
                    <Controller
                      name="txId"
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
                      name="depositAddress"
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
                                {fileValue?.file?.name}
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
                          {/*<ProgressBarUi value={progress}/>*/}
                        </div>
                        :
                        <Controller
                          name="attachment"
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
