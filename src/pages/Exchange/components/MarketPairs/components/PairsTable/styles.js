import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  tableRow: {
    "&:hover>td": {
      background: `${theme.palette.primary.main}0d`,
    },
  },
  tableTextColor: {
    color: theme.palette.text.secondary,
  },
  headerCell: {
    background: `${theme.palette.box.background}`,
    color: theme.palette.text.secondary,
    "&>span": {
      background: `${theme.palette.box.background}`,
    },
  },
  unFavorite: {
    "&>path": {
      fill: `${theme.palette.text.primary}33`,
    },
    "&:hover": {
      "&>path": {
        fill: `${theme.palette.primary.main}80`,
      },
    },
  },
  active: {
    background: `${theme.palette.primary.main}1a`,
    "&:hover": {
      background: `${theme.palette.primary.main}1a`,
    },
  },
}));
