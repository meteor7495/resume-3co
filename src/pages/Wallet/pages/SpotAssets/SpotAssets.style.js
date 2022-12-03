import { makeStyles } from "@mui/styles";
import { elementHight } from "../../../../constants/elementHight.enum";

export default makeStyles((theme) => ({
  tableWrapper: {
    height: `calc(100vh - ${elementHight.header + 154}px)`,
    [theme.breakpoints.down("lg")]: {
      height: "100%",
      minHeight: "100vh",
    },
  },
  tabelHeader: { borderColor: theme.palette.border.main },
  coinEl: {
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.border.main,
  },
  tiker: {
    color: `${theme.palette.text.primary}80`,
  },
}));
