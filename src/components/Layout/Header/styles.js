import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
    header:{
        background: theme.palette.secondBackground.main,
        borderColor: theme.palette.headerBorderColor.main
    },
    link:{
        color: theme.palette.textColor.main
    },
    loginBtn:{
        color: theme.palette.textColor.main
    }
}));
