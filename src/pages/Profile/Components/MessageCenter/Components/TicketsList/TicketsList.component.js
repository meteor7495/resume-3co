import React from "react";
import useStyles from "./TicketsList.styles";
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

export default function TicketsList() {
  const classes = useStyles();
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
      className: `lg:table-cell border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] px-6 py-4 text-left w-[35%] ${classes.borderColor}`
    },
    {
      name: "Time",
      className: `lg:table-cell border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] px-6 py-4 text-center w-[25%] ${classes.borderColor}`
    },
    {
      name: "Department",
      className: `lg:table-cell border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] px-6 py-4 text-center w-[25%] ${classes.borderColor}`
    },
    {
      name: "Status",
      className: `lg:table-cell border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] px-6 py-4 text-center w-[15%] ${classes.borderColor}`
    },
  ];

  function createData({title, time, department, status}) {
    return [
      {children: title, align: 'left',},
      {children: time,},
      {children: department,},
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
          className="lg:flex-grow w-full flex flex-col mb-16 md:mb-0 items-center text-center">
          <div
            className={`flex flex-col w-full rounded-[10px] border border-solid ${classes.table}  ${classes.borderColor}`}>
            <div className={'flex justify-start p-5'}>
              <Typography className={'font-bold text-base'}>
                Tickets
              </Typography>
            </div>
            <div className={"flex w-full"}>
              <Divider sx={{width: "100%"}}/>
            </div>
            <div className={`flex flex-col h-full p-5`}>
              <BoxUi
                className={`h-[500px] p-[5px] flex flex-col lg:p-[10px] pt-0 lg:pt-0 h-full relative`}
              >
                <TableContainer className={`overflow-auto h-full w-full`}>
                  <ScrollbarsUi>
                    <Table aria-label="simple table" size={"small"} stickyHeader>
                      <WalletTableHead header={header}/>
                      <TableBody className={classes.tableBody}>
                        {rows?.length > 0 &&
                          rows.map((cells, i) => (
                            <TableRow
                              key={i}
                              sx={{
                                "&:last-child td, &:last-child th": {border: 0},
                              }}
                              className={classes.tableRow}
                            >
                              {cells.map(({className, align, children, ...props}, i) => {
                                return (
                                  <TableCell
                                    {...props}
                                    key={i}
                                    className={`${tClasses.cell} ${className}`}
                                    align={align ? align : "center"}
                                  >
                                    <div className={'w-max m-auto'}>
                                      {children}
                                    </div>
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </ScrollbarsUi>
                </TableContainer>
                {!rows?.length > 0 && (
                  <div
                    className={`h-full w-full flex flex-col absolute items-center justify-center gap-[16px] ${classes.tableTextColor}`}
                  >
                    <div>No Data!</div>
                    <NothingHere className={`w-[210px] h-[180px]`}/>
                  </div>
                )}
              </BoxUi>
              {pagination && (
                <div className="flex items-center flex-col pt-[15px]">
                  <Pagination
                    {...pagination}
                    color="primary"
                    size="small"
                    renderItem={(item) => (
                      <PaginationItem
                        classes={{
                          previousNext: classes.previousNext,
                          page: "leading-none",
                        }}
                        variant="text"
                        {...item}
                      />
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
