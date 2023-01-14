import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  input: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.input.main,
  },
  bestPrice: {
    borderColor: theme.palette.input.border,
    backgroundColor: theme.palette.input.main,
  },
  assetsSelect: {
    backgroundColor: theme.palette.input.transparent,
  },
  attentionWrapper: {
    backgroundColor: `${theme.palette.warning.main}0d`,
    color: `${theme.palette.warning.main}`,
    borderColor: `${theme.palette.warning.main}`,
  },
}));
