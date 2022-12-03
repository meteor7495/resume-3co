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
  buy: {
    backgroundColor: `${theme.palette.success.main}1a`,
  },
  sell: {
    backgroundColor: `${theme.palette.error.main}1a`,
  },
  tableTextColor: {
    color: `${theme.palette.text.primary}80`,
  },
  responsivPair: {
    color: `${theme.palette.text.primary}80`
  },
  previousNext:{
    "&>svg>path":{
      fill:theme.palette.primary.main,
    }
  }
}));
