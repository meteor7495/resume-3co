import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  body: {
    [theme.breakpoints.down("lg")]: {
      backgroundColor: theme.palette.background.default,
    },
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
    [theme.breakpoints.down("lg")]: {
      backgroundColor: theme.palette.background.default,
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
    [theme.breakpoints.down("lg")]: {
      backgroundColor: theme.palette.background.default,
    },
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
