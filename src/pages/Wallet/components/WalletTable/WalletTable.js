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
import NoData from "components/NoData/NoData";

const WalletTable = ({ header, rows, className, paginator, pageHandler: pageHandlerProp }) => {
  const classes = useStyles();
  const tClasses = {
    headerCell: `border-0 z-[0] text-[15px] font-bold min-w-[100px] ${classes.headerCell}`,
    cell: "border-0 text-[15px] py-[2.5px] [&:last-child]:rounded-r-[5px] [&:first-child]:rounded-l-[5px]",
  };

  const { pageCount, currentPage } = paginator ? paginator : {}
  const pageHandler = (e, page) => {
    pageHandlerProp && pageHandlerProp(e, page)
  }
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
                      {cells.map(({ className, align, ...props }, i) => {
                        return (
                          <TableCell
                            {...props}
                            key={i}
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
        <NoData visible={!rows?.length > 0} className={`w-[150px] h-[130px]`} />
      </BoxUi>
      {paginator && (
        <div className="flex items-center flex-col pt-[15px]">
          <Pagination
            onChange={pageHandler}
            count={pageCount}
            page={currentPage}
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
