import { makeStyles } from "@mui/styles";
import { elementHight } from "../../../../constants/elementHight.enum";

export default makeStyles((theme) => ({
  wrapper: {
    height: `calc(100vh - ${elementHight.header + 35}px)`,
    maxHeight: 730,
    [theme.breakpoints.down("lg")]: {
      height: "100%",
      minHeight: "100vh",
    },
  },
  activeOverview: {
    backgroundColor: `${theme.palette.primary.main}0d`,
  },
  button: {
    color: theme.palette.text.primary,
    borderColor: theme.palette.border.main,
    backgroundColor: `${theme.palette.sidebar.buttonBg}`,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));
