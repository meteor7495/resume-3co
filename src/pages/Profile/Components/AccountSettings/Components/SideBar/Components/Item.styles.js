import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
  body: {
    backgroundColor: `${theme.palette.secondBackground.main}!important`,
    borderColor: `${theme.palette.input.border}!important`,
    borderRadius: 10,
  },
  item: {
    backgroundColor: `${theme.palette.button.menuButtonBg}`,
    borderRadius: 15,
    fontWeight: 700,
    color: `${theme.palette.text.primary}`,
    "& .MuiSvgIcon-root": {
      "& path": {
        fill: `${theme.palette.icons.grey}`,
      }
    },
  },
  disabled:{
    backgroundColor: `${theme.palette.button.disabled}`,
  },
  active:{
    backgroundColor: `${theme.palette.button.active}`,
    "& .MuiSvgIcon-root": {
      "& path": {
        fill: `${theme.palette.primary.main}`,
      }
    },
  }
}));
