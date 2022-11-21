import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  body: {
    borderColor: theme.palette.border.main,
    backgroundColor: theme.palette.box.background,
  },
  button: {
    borderColor: theme.palette.input.border,
    color: theme.palette.text.primary,
  },
  vector: {
    backgroundColor: theme.palette.input.main,
    "&>svg>path": {
      fill: theme.palette.primary.main,
    },
  },
}));
