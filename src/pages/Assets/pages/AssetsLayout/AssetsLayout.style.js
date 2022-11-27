import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  body: {
    minHeight: "calc(100vh - 64px)",
  },
  activeOverview: {
    backgroundColor: `${theme.palette.primary.main}0d`,
  },
  overview: {
    backgroundColor: "transparent",
    borderColor: theme.palette.border.main,
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  CollapseUiButton: {
    backgroundColor: `${theme.palette.sidebar.buttonBg}`,
    color: theme.palette.text.primary,
  },
  vector: {
    backgroundColor: `${theme.palette.sidebar.vectorBg}`,
  },
  CollapseLink: {
    color: theme.palette.text.primary,
  },
  activeLink: {
    backgroundColor: `${theme.palette.primary.main}0d`,
    color: theme.palette.primary.main,
  },
}));
