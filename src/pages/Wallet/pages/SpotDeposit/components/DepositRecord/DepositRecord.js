import { Refresh } from "@mui/icons-material";
import BoxUi from "../../../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
// import WalletTable from "../../../../components/WalletTable/WalletTable";
import useStyles from "./styles.js";
export default function DepositRecord({ children, ...props }) {
  const classes = useStyles();
  return (
    <BoxUi
      header={
        <div className={`flex justify-between`}>
          <div className={`flex gap-[5px] font-bold items-center`}>
            Last 10 Deposit Records
            <ButtonUi className={`p-[2px] min-w-0 w-fit`}>
              <Refresh className={`text-[15px]`} />
            </ButtonUi>
          </div>
          <div>
            <ButtonUi
              variant="outlined"
              className={`px-[9px] py-[7px] leading-none rounded-[5px] ${classes.button}`}
            >
              All Records
            </ButtonUi>
          </div>
        </div>
      }
    >
      {/* <WalletTable /> */}
    </BoxUi>
  );
}
