import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.background.main,
    "&>div": {
      height: "calc(100vh - 64px)",
      [theme.breakpoints.down("md")]: {
        height: "100%",
        minHeight: "100vh",
      },
    },
  },
}));
