import { makeStyles } from "@mui/styles";
import { elementHight } from "constants/elementHight.enum";

export default makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.background.main,
    "&>div": {
      height: `calc(100vh - ${elementHight.header}px)`,
      [theme.breakpoints.down("lg")]: {
        height: "100%",
        minHeight: "100vh",
      },
    },
  },
}));
