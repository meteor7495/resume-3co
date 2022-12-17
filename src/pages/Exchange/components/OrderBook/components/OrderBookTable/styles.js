import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  body: {
    borderColor: theme.palette.border.main,
    backgroundColor: theme.palette.box.background,
  },
  buyHeader: {
    background: theme.palette.box.background,
    "&>span": {
      width: "100%",
      display: "block",
      height: "100%",
      background: theme.palette.orderBook.buyBackground,
    },
  },
  sellHeader: {
    background: theme.palette.box.background,
    "&>span": {
      width: "100%",
      display: "block",
      height: "100%",
      background: theme.palette.orderBook.sellBackground,
    },
  },
}));
