
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  wrapper: {
    "&>div:first-child": {
      marginRight: "0 !important",
      marginBottom: "0 !important",
      [theme.breakpoints.up("lg")]: {
        "-ms-overflow-style": "none",
        scrollbarWidth: "none",

        "&::-webkit-scrollbar": {
          display: "none"
        },
      },
    }
  }
}));
