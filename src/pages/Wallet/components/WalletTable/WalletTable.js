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

const WalletTable = ({ header, rows }) => {
  const classes = useStyles();
  const tClasses = {
    headerCell: `border-0 z-[0] text-[15px] font-bold min-w-[100px] ${classes.headerCell}`,
    cell: "border-0 text-[15px] py-[2.5px] [&:last-child]:rounded-l-[5px] [&:first-child]:rounded-l-[5px]",
  };
  return (
    <div className={`flex flex-col h-full`}>
      <BoxUi
        className={`p-[5px] flex flex-col lg:p-[10px] pt-0 lg:pt-0 h-full ${classes.body}`}
      >
        <TableContainer className={`overflow-auto h-full w-full`}>
          <ScrollbarsUi>
            <Table aria-label="simple table" size={"small"} stickyHeader>
              <WalletTableHead header={header} />
              <TableBody>
                {rows.map((cells, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
      </BoxUi>
      <div className="flex items-center flex-col pt-[15px]">
        <Pagination
          count={10}
          color="primary"
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
    </div>
  );
};

export default WalletTable;
