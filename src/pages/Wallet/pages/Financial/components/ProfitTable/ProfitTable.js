import BoxUi from "../../../../../../components/UiKit/BoxUi";
import useDate from "../../../../../../hooks/useDate";
import WalletTable from "../../../../components/WalletTable/WalletTable";
import useStyles from "../../Financial.style";

export default function ProfitTable({ pages, ...props }) {
  const classes = useStyles();
  const getDate = useDate();
  const newProfitRow = [].map(function ({
    from,
    to,
    coin,
    total,
    profit,
  }) {
    return [
      {
        children: (
          <div className="text-[14px] w-max m-auto" >
            {getDate(from).format("MM/DD")}{" "}
            <span className="font-bold">to</span> {getDate(to).format("MM/DD")}
          </div>
        ),
      },
      { children: <div className={`text-[14px] w-max m-auto ${classes.ticker}`}>{coin}</div> },
      { children: <div className={`text-[14px] w-max m-auto ${classes.ticker}`}>{total} USDT</div> },
      { children: <div className="text-[14px] w-max m-auto text-success font-bold">{profit} USDT</div> },
    ];
  });
  return (
    <BoxUi
      className={`flex p-0 flex-col `}
      classes={{
        header: "flex items-center flex-col lg:flex-row",
        body: "h-[340px] gap-[10px] flex flex-col",
      }}
      header={<div className={`font-bold`}>Profit Distribution</div>}
    >
      <WalletTable header={ProfitHeaderItems} rows={newProfitRow} />
    </BoxUi>
  );
}

const ProfitHeaderItems = [
  { name: "Date" },
  { name: "Coin" },
  { name: "Total Profit" },
  { name: "Your Profit" },
];
function ProfitCreateData(from, to, coin, total, profit) {
  return { from, to, coin, total, profit };
}

const profitRows = [
  ProfitCreateData(
    "2022-12-21 15:44:00",
    "2022-12-21 15:44:00",
    "3CO",
    "15.372",
    "1124.74"
  ),
  ProfitCreateData(
    "2022-12-21 15:44:00",
    "2022-12-21 15:44:00",
    "3CO",
    "15.372",
    "1124.74"
  ),
  ProfitCreateData(
    "2022-12-21 15:44:00",
    "2022-12-21 15:44:00",
    "3CO",
    "15.372",
    "1124.74"
  ),
  ProfitCreateData(
    "2022-12-21 15:44:00",
    "2022-12-21 15:44:00",
    "3CO",
    "15.372",
    "1124.74"
  ),
  ProfitCreateData(
    "2022-12-21 15:44:00",
    "2022-12-21 15:44:00",
    "3CO",
    "15.372",
    "1124.74"
  ),
  ProfitCreateData(
    "2022-12-21 15:44:00",
    "2022-12-21 15:44:00",
    "3CO",
    "15.372",
    "1124.74"
  ),
];
