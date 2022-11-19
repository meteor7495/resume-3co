import { makeStyles, useTheme, them } from "@mui/styles";

export default makeStyles((theme) => ({
  PairsSelectWrapper: {
    backgroundColor: theme.palette.input.main,
  },
  selected: {
    borderColor: theme.palette.primary.main,
  },
  unSelected: {
    color: `${theme.palette.text.primary}33`,
    borderColor: `${theme.palette.text.primary}33`,
    "&:hover": {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    "&>svg>path": {
      fill: `${theme.palette.text.primary}33`,
    },
    "&:hover>svg>path": {
      fill: theme.palette.primary.main,
    },
  },
}));
