import { makeStyles } from "@mui/styles";
import { elementHight } from "../../../../constants/elementHight.enum";

export default makeStyles((theme) => ({
  body: {
    minHeight: `calc(100vh - ${elementHight.header}px)`,
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
  CollapseUiButton: {
    backgroundColor: `${theme.palette.sidebar.buttonBg}`,
    color: theme.palette.text.primary,
    borderColor: theme.palette.border.main,
    [theme.breakpoints.down("lg")]: {
      backgroundColor: `${theme.palette.background.default}`,
      justifyContent: "center",
    },
  },
  button: {
    color: theme.palette.text.primary,
    borderColor: theme.palette.border.main,
    backgroundColor: `${theme.palette.sidebar.buttonBg}`,
    [theme.breakpoints.down("lg")]: {
      backgroundColor: `${theme.palette.background.default}`,
    },
  },
  OverviewButton: {
    backgroundColor: theme.palette.box.background,
  },
  CollapseLink: {
    color: theme.palette.text.primary,
  },
  vector: {
    [theme.breakpoints.down("lg")]: {
      backgroundColor: `${theme.palette.background.default}`,
    },
  },
  activeLink: {
    backgroundColor: `${theme.palette.primary.main}0d`,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}));
