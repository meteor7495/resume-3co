import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  icon: {
    color: `${theme.palette.primary.light} !important`,
  },
  text: {
    fill: `${theme.palette.primary.main}`,
  },
  label: {
    fontWeight: "700 !important",
  },
  line: {
    borderColor: `${theme.palette.primary.main}33`,
  },
}));
