import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  headerCell: {
    color: theme.palette.text.secondary,
    backgroundColor: `${theme.palette.background.light}`,
  },
  select: {
    "&>svg": {
      padding: "0px 8px",
      width: 24,
      height: 15,
    },
  },
}));
