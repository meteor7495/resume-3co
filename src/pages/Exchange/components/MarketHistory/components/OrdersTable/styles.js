import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  body: {
    borderColor: theme.palette.border.light,
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: `${theme.palette.primary.main}0d`,
    },
  },
  headerCell: {
    color: `${theme.palette.text.primary}80`,
  },
  tableTextColor: {
    color: `${theme.palette.text.primary}80`,
  },
}));
