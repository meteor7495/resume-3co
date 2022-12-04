import { Refresh } from "@mui/icons-material";
import { Link } from "react-router-dom";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import routes from "../../../../configs/routes";
import HistoryTable from "../HistoryTable/HistoryTable";
import useStyles from "./styles.js";
export default function WalletRecord({ children, type, ...props }) {
  const classes = useStyles();
  return (
    <BoxUi
      header={
        <div className={`flex justify-between`}>
          <div className={`flex gap-[5px] font-bold items-center`}>
            Last 10 {type} Records
            <ButtonUi className={`p-[2px] min-w-0 w-fit`}>
              <Refresh className={`text-[15px]`} />
            </ButtonUi>
          </div>
          <div>
            <Link to={routes.wallet.history[type]}>
              <ButtonUi
                variant="outlined"
                className={`px-[9px] py-[7px] leading-none rounded-[5px] ${classes.button}`}
              >
                All Records
              </ButtonUi>
            </Link>
          </div>
        </div>
      }
    >
      <HistoryTable type={type} className={`h-[400px]`} />
    </BoxUi>
  );
}
