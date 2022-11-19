import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
    header:{
        background: theme.palette.secondBackground.main,
        borderColor: theme.palette.headerBorderColor.main
    },
    menuBg:{
        background: theme.palette.secondBackground.main
    },
    link:{
        color: theme.palette.textColor.main
    },
    loginBtn:{
        color: theme.palette.textColor.main
    },
    buttonColor:{
        background: theme.palette.button.menuButtonBg,
        color: theme.palette.textColor.main
    }
}));
