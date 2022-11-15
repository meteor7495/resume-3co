import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  body: {
    borderColor: theme.palette.border.main,
    backgroundColor: theme.palette.box.background,
  },
  sellHeader: {
    background: theme.palette.box.background,
    "&>span": {
      width: "100%",
      display: "block",
      height: "100%",
      background:
        "linear-gradient(180deg, rgba(243, 79, 69, 0.1) 0%, rgba(243, 79, 69, 0.1) 100%)",
    },
  },
}));
