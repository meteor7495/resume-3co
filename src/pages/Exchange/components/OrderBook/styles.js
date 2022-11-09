import { makeStyles, useTheme, them } from "@mui/styles";

export default makeStyles((theme) => ({
  body: {
    // backgroundColor: `${theme.palette.background.main}`,
  },
  orderRed: {
    background:
      "linear-gradient(180deg, rgba(243, 79, 69, 0.1) 0%, rgba(243, 79, 69, 0) 100%), #FFFFFF",
  },
  orderGreen: {
    background:
      "linear-gradient(180deg, rgba(53, 200, 90, 0) 0%, rgba(53, 200, 90, 0.1) 100%), #FFFFFF",
  },
}));
