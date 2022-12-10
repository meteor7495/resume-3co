import { makeStyles } from "@mui/styles";
import { elementHight } from "../../../../constants/elementHight.enum";

export default makeStyles((theme) => ({
  share: {
    backgroundColor: `${theme.palette.success.main}0d`,
    borderColor: `${theme.palette.success.main}`,
  },
  coinEl: {
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.border.main,
  },
  tiker: {
    color: theme.palette.text.secondary,
  },
}));
