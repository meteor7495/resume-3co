import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.input.main,
    "& fieldset": {
      borderColor: theme.palette.border.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.input.hover + " !important",
    },
  },
}));
