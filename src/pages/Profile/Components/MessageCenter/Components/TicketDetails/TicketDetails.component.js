import React, {useEffect, useState} from "react";
import useStyles from "./TicketDetails.styles";
import {
  Divider,
  Pagination,
  PaginationItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from "@mui/material";
import BoxUi from "../../../../../../components/UiKit/BoxUi";
import ScrollbarsUi from "../../../../../../components/UiKit/PerfectScrollbarUi";
import WalletTableHead from "../../../../../Wallet/components/WalletTableHead";
import {ReactComponent as NothingHere} from "../../../../../../assets/svg/NothingHere.svg";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import FileSvg from "../../../../../../assets/icons/file.svg";
import AttachmentSVG from "../../../../../../assets/icons/attachment.svg";
import InputUi from "../../../../../../components/UiKit/InputUi";
import CloseIcon from "@mui/icons-material/Close";
import UploadFile from "../../../../../../components/UploadFile/UploadFile";
import {getTicket, replyTicket} from "../../Store/ticketSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {FILE_URL} from "../../../../../../configs";

export default function TicketsList() {
  const classes = useStyles();
  const [fileValue, setFileValue] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams()
  const { ticket } = useSelector((s) => s.messageCenter);
  const { user } = useSelector((s) => s.user);
  const [value, setValue] = useState('')
  useEffect(() => {
    console.log('paramsparamsparamsparamsparams',params)
    dispatch(getTicket({selectId: params?.id}));
  }, []);
  useEffect(() => {
    console.log('valuevaluevaluevaluevalue',value)
  },[value])
  const onSubmit = () => {
    dispatch(replyTicket({formData: {
        message: value,
        attachment: fileValue?.file
      },
      selectId: params?.id
    }));
    setValue('')
    setFileValue({})
  }
  const statusHandler = (status) => {
    if (status === 'closed') {
      return "text-error";
    } else if (status === 'replied') {
      return "text-success";
    } else {
      return "text-warning";
    }
  }
  const MessageUiHandler = (item) => {
    console.log('itemitemitemitem',item)
    const object = item?.sender?.role === 'USER' ?
      {
        boxRounded: 'rounded-t-[10px] rounded-br-[10px]',
        name: item?.sender?.fullName,
        className: 'lg:flex-row w-full justify-start',
        operatorClass:'',
        filesClass:'',
      }
      :
      {
        boxRounded: 'rounded-t-[10px] rounded-bl-[10px]',
        name: 'Operator',
        className: 'lg:flex-row-reverse w-full',
        operatorClass:'text-success',
        filesClass:'items-end text-right',
      }
    return <div className={`flex flex-col ${object?.className}`}>
      <div className={`flex flex-col w-full lg:w-3/5 border border-solid p-4 ${object?.boxRounded} ${classes.borderColor}`}>
        <Typography variant={'h5'} className={`w-full text-base font-bold ${object?.operatorClass} capitalize`}>
          {object?.name}
        </Typography>
        <Typography color={'text.secondary'} className={'text-base font-normal mt-3'}>
          {item?.message}
        </Typography>
      </div>
      <div className={`flex flex-col w-full lg:w-2/5 py-4 lg:p-4 justify-center ${object?.filesClass}`}>
        {
          item?.attachment && item?.attachment !== ''
          ?
            <div>
              <Typography color={'text.secondary'} className={'text-xs'}>
                Files Included
              </Typography>
              <a target={'_blank'} href={`${FILE_URL}${item?.attachment?.path}`} download>
                <ButtonUi sx={{backgroundColor:'transparent!important',padding:0,minWidth:'auto'}} className={'flex items-center mt-2'}>
                  <img src={FileSvg} style={{width: 10, height: 12}}/>
                  <Typography color={'primary'} className={'text-[10px] ml-2'}>
                    {item?.attachment?.name}
                  </Typography>
                </ButtonUi>
              </a>
            </div>
            :''
        }

        <div className={'mt-2'}>
          <Typography color={'text.secondary'} className={'text-xs'}>
            Sent Time
          </Typography>
          <Typography className={'text-[10px] mt-2'}>
            {item?.createdAt}
          </Typography>
        </div>
      </div>
    </div>
  }
  return (
    <section className={"body-font h-[700px] lg:h-full"}>
      <div className="container mx-auto flex md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow w-full flex flex-col mb-16 md:mb-0 items-center">
          <div
            className={`flex flex-col w-full rounded-[10px] border border-solid ${classes.borderColor}`}>
            <div className={'flex flex-wrap justify-start p-5'}>
              <div className={'w-full mb-3'}>
                <ButtonUi onClick={() => navigate('/profile/message-center')} variant={'text'} sx={{backgroundColor:'transparent!important',padding:0,minWidth:'auto'}}>
                  <ArrowBackIosIcon fontSize={'16px'} /> Back
                </ButtonUi>
              </div>
              <div className={'flex w-full items-center flex-col lg:flex-row'}>
                <div className={'flex w-full lg:w-3/5 items-center flex-col lg:flex-row'}>
                  <Typography className={'font-bold text-base'}>
                    {ticket?.issueType?.title}
                  </Typography>
                  <Typography color={'text.secondary'} className={'hidden lg:flex text-3xl'}>&nbsp;|&nbsp;</Typography>
                  <div className={"lg:hidden flex w-full mt-2 mb-2"}>
                    <Divider sx={{width: "100%",borderWidth:2,maxWidth: 172}} className={`mx-auto ${classes.borderColor}`}/>
                  </div>
                  <Typography color={'text.secondary'} className={' text-base'}>
                    Deposit & Withdraw
                  </Typography>
                </div>
                <div className={'flex w-full lg:w-2/5 items-center justify-end'}>
                  <Typography
                    className={'text-center lg:text-right w-full lg:w-auto justify-center flex items-center mt-2'}
                    color={'text.secondary'}
                  >
                    Status:
                    <Typography
                      className={`${statusHandler(ticket?.status)} ml-2 capitalize`}
                    >
                      {ticket?.status}
                    </Typography>
                  </Typography>
                </div>
              </div>
            </div>
            <div className={"flex w-full"}>
              <Divider sx={{width: "100%"}}/>
            </div>
            <div className={`flex flex-col h-full p-5 gap-5`}>
              {
                ticket?.messages?.map((item) => {
                  return MessageUiHandler(item)
                })
              }
              <div className={'flex w-full justify-start'}>
                <div className={`flex flex-col w-full lg:w-3/5 border border-solid rounded-t-[10px] rounded-br-[10px] ${classes.borderColor}`}>
                  <div className={'p-4'}>
                    <Typography variant={'h5'} className={'w-full text-base font-bold mb-3 capitalize'}>
                      {user?.fullName}
                    </Typography>
                    <InputUi
                      sx={{
                        backgroundColor:'transparent!important',
                        border:'none!important',
                        padding:'0!important',
                        "& .MuiInputBase-root":{backgroundColor:'transparent!important',border:'none!important',padding:'0!important'},
                        "& .MuiOutlinedInput-notchedOutline":{backgroundColor:'transparent!important',border:'none!important',padding:'0!important'},
                        "& textarea":{padding:'0!important'},
                      }}
                      value={value}
                      onChange={(event) => setValue(event.target.value)}
                      placeholder={'Start Typing...'}
                      multiline
                      rows={4}
                    />
                  </div>
                  <div className={"flex w-full"}>
                    <Divider className={classes.borderColor} sx={{width: "100%"}}/>
                  </div>
                  <div className={'p-4 flex justify-between'}>
                    {
                      console.log('fileValuefileValuefileValuefileValuefileValue',fileValue)
                    }
                    {
                      fileValue?.file ?
                        <div className={'flex justify-between gap-2 items-center'}>
                          <div className={'flex'}>
                            <img src={FileSvg} style={{width: 10, height: 12}}/>
                            <Typography color={'textColor.gray'} className={'ml-2 text-xs'}>
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
                        :
                        <div className={'w-2/3 flex items-center'}>
                          <UploadFile onDrop={setFileValue}>
                            <ButtonUi  sx={{backgroundColor:'transparent!important',padding:0,minWidth:'auto'}} className={'flex items-center'}>
                              <Typography color={'primary'} className={'text-xs mr-2'}>Attach File</Typography>
                              <img src={AttachmentSVG} style={{width: 20, height: 11}}/>
                            </ButtonUi>
                          </UploadFile>
                        </div>
                    }

                    <ButtonUi onClick={() => {
                      onSubmit()
                    }} size={'small'} variant={'contained'}>
                      Send Reply
                    </ButtonUi>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
