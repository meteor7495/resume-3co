import {
  Pagination,
  PaginationItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ScrollbarsUi from "../../../../components/UiKit/PerfectScrollbarUi/ScrollbarsUi";
import useStyles from "./styles";
import WalletTableHead from "../WalletTableHead";
import { ReactComponent as NothingHere } from "../../../../assets/svg/NothingHere.svg";

const WalletTable = ({ header, rows, className, pagination }) => {
  const classes = useStyles();
  const tClasses = {
    headerCell: `border-0 z-[0] text-[15px] font-bold min-w-[100px] ${classes.headerCell}`,
    cell: "border-0 text-[15px] py-[2.5px] [&:last-child]:rounded-l-[5px] [&:first-child]:rounded-l-[5px]",
  };
  return (
    <div className={`flex flex-col h-full ${className}`}>
      <BoxUi
        className={`p-[5px] flex flex-col lg:p-[10px] pt-0 lg:pt-0 h-full relative ${classes.body}`}
      >
        <TableContainer className={`overflow-auto h-full w-full`}>
          <ScrollbarsUi>
            <Table aria-label="simple table" size={"small"} stickyHeader>
              <WalletTableHead header={header} />
              <TableBody>
                {rows?.length > 0 &&
                  rows.map((cells, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      className={classes.tableRow}
                    >
                      {cells.map(({ className, align, ...props }) => {
                        return (
                          <TableCell
                            {...props}
                            className={`${tClasses.cell} ${className}`}
                            align={align ? align : "center"}
                          />
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
            <NothingHere className={`w-[210px] h-[180px]`} />
          </div>
        )}
      </BoxUi>
      {console.log({ ...pagination })}
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
  );
};

export default WalletTable;
