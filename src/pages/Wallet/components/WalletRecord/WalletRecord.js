import { Refresh } from "@mui/icons-material";
import { getHistory } from "pages/Wallet/store/historySlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import routes from "../../../../configs/routes";
import HistoryTable from "../HistoryTable/HistoryTable";

export default function WalletRecord({ children, type, ...props }) {
  const dispatch = useDispatch();
  const refreshHandler = () => {
    dispatch(
      getHistory({ query: { action: type && type.toLowerCase(), limit: 10 } })
    );
  };
  return (
    <BoxUi
      header={
        <div
          className={`flex justify-between items-center flex-col lg:flex-row`}
        >
          <div className={`flex gap-[5px] font-bold items-center`}>
            Last 10 {type} Records
            <ButtonUi
              onClick={refreshHandler}
              className={`p-[2px] min-w-0 w-fit`}
            >
              <Refresh className={`text-[15px]`} />
            </ButtonUi>
          </div>
          <div className={`hidden lg:block`}>
            <AllRecords type={type} />
          </div>
        </div>
      }
    >
      <HistoryTable
        type={type}
        querys={{ limit: 10 }}
        className={`h-[310px]`}
      />
      <div className="lg:hidden">
        <AllRecords type={type} />
      </div>
    </BoxUi>
  );
}

const AllRecords = ({ type }) => {
  return (
    <Link to={`../${routes.wallet.history[type.toLowerCase()]}`}>
      <ButtonUi
        variant="outlined"
        className={`px-[9px] py-[7px] w-full mt-[10px] leading-none rounded-[5px]`}
      >
        All Records
      </ButtonUi>
    </Link>
  );
};
