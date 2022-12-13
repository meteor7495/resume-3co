import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  coinEl: {
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.border.main,
  },
  ticker: {
    color: theme.palette.text.secondary,
  },
  activeOverview: {
    backgroundColor: `${theme.palette.primary.main}0d`,
  },
  overview: {
    borderColor: theme.palette.border.main,
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  button: {
    color: theme.palette.text.primary,
    borderColor: theme.palette.border.main,
    backgroundColor: `${theme.palette.sidebar.buttonBg}`,
  },
  tooltip: {
    backgroundColor: theme.palette.success.main,
  },
  tooltipColor: {
    color: theme.palette.success.main,
  },
}));
