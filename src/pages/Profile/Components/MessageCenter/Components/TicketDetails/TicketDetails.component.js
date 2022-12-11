import React, {useState} from "react";
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

export default function TicketsList() {
  const classes = useStyles();
  const [fileValue, setFileValue] = useState({});
  const tClasses = {
    headerCell: `border-0 z-[1] text-[15px] font-bold min-w-[100px] ${classes.headerCell}`,
    cell: "border-0 text-[15px] px-[10px] py-[2.5px] [&:last-child]:rounded-l-[5px] [&:first-child]:rounded-l-[5px]",
  };
  const statusHandler = (status) => {
    if (status === 'closed') {
      return "text-error";
    } else if (status === 'replied') {
      return "text-success";
    } else {
      return "text-warning";
    }
  }
  const pagination = {count: 1}
  const header = [
    {
      name: "Subject",
      className: `hidden lg:table-cell border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] px-6 py-4 text-left w-[35%] ${classes.borderColor}`
    },
    {
      name: "Time",
      className: `hidden lg:table-cell border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] px-6 py-4 text-center w-[25%] ${classes.borderColor}`
    },
    {
      name: "Department",
      className: `hidden lg:table-cell border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] px-6 py-4 text-center w-[25%] ${classes.borderColor}`
    },
    {
      name: "Status",
      className: `hidden lg:table-cell border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] px-6 py-4 text-center w-[15%] ${classes.borderColor}`
    },
  ];

  function createData({title, time, department, status}) {
    return [
      {children: title, align: 'left'},
      {children: time},
      {children: department},
      {children: status, className: `font-bold capitalize ${statusHandler(status)}`},
    ];
  }

  const rows = [
    createData(
      {
        title: 'Deposit via Address not Credited',
        time: '2022/12/03 - 21:06:12',
        department: 'Deposit & Withdraw',
        status: 'closed',
      },
    ),
    createData(
      {
        title: 'Deposit via Address not Credited',
        time: '2022/12/03 - 21:06:12',
        department: 'Deposit & Withdraw',
        status: 'pending',
      },
    ),
    createData(
      {
        title: 'Deposit via Address not Credited',
        time: '2022/12/03 - 21:06:12',
        department: 'Deposit & Withdraw',
        status: 'replied',
      },
    ),
    createData(
      {
        title: 'Deposit via Address not Credited',
        time: '2022/12/03 - 21:06:12',
        department: 'Deposit & Withdraw',
        status: 'closed',
      },
    ),
    createData(
      {
        title: 'Deposit via Address not Credited',
        time: '2022/12/03 - 21:06:12',
        department: 'Deposit & Withdraw',
        status: 'pending',
      },
    ),
    createData(
      {
        title: 'Deposit via Address not Credited',
        time: '2022/12/03 - 21:06:12',
        department: 'Deposit & Withdraw',
        status: 'replied',
      },
    ),
    createData(
      {
        title: 'Deposit via Address not Credited',
        time: '2022/12/03 - 21:06:12',
        department: 'Deposit & Withdraw',
        status: 'closed',
      },
    ),
    createData(
      {
        title: 'Deposit via Address not Credited',
        time: '2022/12/03 - 21:06:12',
        department: 'Deposit & Withdraw',
        status: 'pending',
      },
    ),
    createData(
      {
        title: 'Deposit via Address not Credited',
        time: '2022/12/03 - 21:06:12',
        department: 'Deposit & Withdraw',
        status: 'replied',
      },
    ),
  ]
  return (
    <section className={"body-font h-[700px] lg:h-full"}>
      <div className="container mx-auto flex md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow w-full flex flex-col mb-16 md:mb-0 items-center">
          <div
            className={`flex flex-col w-full rounded-[10px] border border-solid ${classes.borderColor}`}>
            <div className={'flex flex-wrap justify-start p-5'}>
              <div className={'w-full mb-3'}>
                <ButtonUi variant={'text'} sx={{backgroundColor:'transparent!important',padding:0,minWidth:'auto'}}>
                  <ArrowBackIosIcon fontSize={'16px'} /> Back
                </ButtonUi>
              </div>
              <div className={'flex w-full items-center flex-col lg:flex-row'}>
                <div className={'flex w-full lg:w-3/5 items-center flex-col lg:flex-row'}>
                  <Typography className={'font-bold text-base'}>
                    Deposit via Address not Credited
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
                  <Typography className={'text-center lg:text-right w-full lg:w-auto justify-center flex items-center mt-2'} color={'text.secondary'}>Status: <Typography className={'text-success ml-2'}>Replied</Typography></Typography>
                </div>
              </div>
            </div>
            <div className={"flex w-full"}>
              <Divider sx={{width: "100%"}}/>
            </div>
            <div className={`flex flex-col h-full p-5 gap-5`}>
              <div className={'flex flex-col lg:flex-row w-full justify-start'}>
                <div className={`flex flex-col w-full lg:w-3/5 border border-solid p-4 rounded-t-[10px] rounded-br-[10px] ${classes.borderColor}`}>
                  <Typography variant={'h5'} className={'w-full text-base font-bold'}>
                    Hosein Akrami
                  </Typography>
                  <Typography color={'text.secondary'} className={'text-base font-normal mt-3'}>
                    Lorem ipsum dolor sit amet consectetur. Euismod nunc sapien neque pretium varius rhoncus montes blandit ac. Vitae et in sit platea nisi. Dui odio purus placerat suspendisse arcu commodo in ligula. Pulvinar natoque sit consectetur bibendum. Dolor vestibulum adipiscing et nibh auctor in.
                    Eget nunc mattis cum consectetur. Cras vitae nec sit at neque non id. Enim leo.
                  </Typography>
                </div>
                <div className={`flex flex-col w-full lg:w-2/5 py-4 lg:p-4 justify-center`}>
                  <div>
                    <Typography color={'text.secondary'} className={'text-xs'}>
                      Files Included
                    </Typography>
                    <ButtonUi sx={{backgroundColor:'transparent!important',padding:0,minWidth:'auto'}} className={'flex items-center mt-2'}>
                      <img src={FileSvg} style={{width: 10, height: 12}}/>
                      <Typography color={'primary'} className={'text-[10px] ml-2'}>theIssue026_2022_11_29.doc</Typography>
                    </ButtonUi>
                  </div>
                  <div className={'mt-2'}>
                    <Typography color={'text.secondary'} className={'text-xs'}>
                      Sent Time
                    </Typography>
                    <Typography className={'text-[10px] mt-2'}>
                      2022/12/03 - 21:06:12
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={'flex flex-col lg:flex-row w-full justify-start flex-row-reverse'}>
                <div className={`flex flex-col w-full lg:w-3/5 border border-solid p-4 rounded-t-[10px] rounded-bl-[10px] ${classes.borderColor}`}>
                  <Typography variant={'h5'} className={'w-full text-base font-bold text-success'}>
                    Operator
                  </Typography>
                  <Typography color={'text.secondary'} className={'text-base font-normal mt-3'}>
                    Lorem ipsum dolor sit amet consectetur. Euismod nunc sapien neque pretium varius rhoncus montes blandit ac. Vitae et in sit platea nisi. Dui odio purus placerat suspendisse arcu commodo in ligula. Pulvinar natoque sit consectetur bibendum. Dolor vestibulum adipiscing et nibh auctor in.
                    Eget nunc mattis cum consectetur. Cras vitae nec sit at neque non id. Enim leo.
                  </Typography>
                </div>
                <div className={`flex flex-col w-full lg:w-2/5 py-4 lg:p-4 justify-center items-end`}>
                  <div>
                    <Typography color={'text.secondary'} className={'text-xs text-right'}>
                      Files Included
                    </Typography>
                    <ButtonUi sx={{backgroundColor:'transparent!important',padding:0,minWidth:'auto'}} className={'flex items-center mt-2'}>
                      <img src={FileSvg} style={{width: 10, height: 12}}/>
                      <Typography color={'primary'} className={'text-[10px] ml-2'}>theIssue026_2022_11_29.doc</Typography>
                    </ButtonUi>
                  </div>
                  <div className={'mt-2'}>
                    <Typography color={'text.secondary'} className={'text-xs text-right'}>
                      Sent Time
                    </Typography>
                    <Typography className={'text-[10px] mt-2'}>
                      2022/12/03 - 21:06:12
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={'flex flex-col lg:flex-row w-full justify-start'}>
                <div className={`flex flex-col w-full lg:w-3/5 border border-solid p-4 rounded-t-[10px] rounded-br-[10px] ${classes.borderColor}`}>
                  <Typography variant={'h5'} className={'w-full text-base font-bold'}>
                    Hosein Akrami
                  </Typography>
                  <Typography color={'text.secondary'} className={'text-base font-normal mt-3'}>
                    Lorem ipsum dolor sit amet consectetur. Euismod nunc sapien neque pretium varius rhoncus montes blandit ac. Vitae et in sit platea nisi. Dui odio purus placerat suspendisse arcu commodo in ligula. Pulvinar natoque sit consectetur bibendum. Dolor vestibulum adipiscing et nibh auctor in.
                    Eget nunc mattis cum consectetur. Cras vitae nec sit at neque non id. Enim leo.
                  </Typography>
                </div>
                <div className={`flex flex-col w-full lg:w-2/5 py-4 lg:p-4 justify-center`}>
                  <div className={'mt-2'}>
                    <Typography color={'text.secondary'} className={'text-xs'}>
                      Sent Time
                    </Typography>
                    <Typography className={'text-[10px] mt-2'}>
                      2022/12/03 - 21:06:12
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={'flex w-full justify-start'}>
                <div className={`flex flex-col w-full lg:w-3/5 border border-solid rounded-t-[10px] rounded-br-[10px] ${classes.borderColor}`}>
                  <div className={'p-4'}>
                    <Typography variant={'h5'} className={'w-full text-base font-bold mb-3'}>
                      Hosein Akrami
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
                      fileValue?.file ?
                        <div className={'flex justify-between gap-2 items-center'}>
                          <div className={'flex'}>
                            <img src={FileSvg} style={{width: 10, height: 12}}/>
                            <Typography color={'textColor.gray'} className={'ml-2 text-xs'}>
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

                    <ButtonUi size={'small'} variant={'contained'}>
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
