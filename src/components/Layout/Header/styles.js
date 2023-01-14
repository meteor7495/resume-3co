import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  header: {
    background: theme.palette.secondBackground.main,
    borderColor: theme.palette.headerBorderColor.main,
  },
  headerInner: {
    borderColor: theme.palette.headerBorderColor.main,
  },
  balance:{
    color:theme.palette.primary.main
  },
  menuBg: {
    background: theme.palette.secondBackground.main,
  },
  link: {
    color: theme.palette.textColor.main,
  },
  loginBtn: {
    color: theme.palette.textColor.main,
  },
  buttonColor: {
    background: theme.palette.button.menuButtonBg,
  },
  drawer: {
    background: theme.palette.background.default,
  },
  menuStyles:{
    "& .MuiPaper-root":{
      marginTop:20,
      backgroundColor: theme.palette.background.paper,
      boxShadow:'none',
      border: `1px solid ${theme.palette.border.main}`,
      borderRadius: 10
    },
    "& .MuiMenuItem-root":{
      background:'transparent'
    }
  },
  menuStylesResponsive:{
    "& .MuiMenuItem-root":{
      background:'transparent',
      padding:0,
      minHeight:36,
      marginTop: 15,
    }
  },
  menuItemCustom:{
    width:'100%',
    border: `1px solid ${theme.palette.border.main}`,
    borderRadius: 10,
    textAlign:'left',
    justifyContent:'start',
    color: theme.palette.textColor.main,
    background: theme.palette.background.default,
  },
}));
