import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
    body: {
        backgroundColor: `${theme.palette.backGround}`,
    },
    background: {
        backgroundColor: `${theme.palette.background.paper}!important`,
    },
    title:{
        color: theme.palette.text.primary,
    },
    borderColor:{
        borderColor: theme.palette.border.main,
    },
    tableBody:{
        "& tr":{
            height:49,
            "&:nth-child(odd)":{
                backgroundColor: theme.palette.box.bgBlueTransparent
            }
        }
    }
}));
