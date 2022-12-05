import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  warningTitle: {
    color: `${theme.palette.warning.main}`,
  },
  textSecondary: {
    color: theme.palette.text.secondary
  },
  attentionWrapper: {
    backgroundColor: `${theme.palette.warning.main}0d`,
    borderColor: `${theme.palette.warning.main}`
  }
}));
