import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
    body: {
        backgroundColor: `${theme.palette.backGround}`,
    },
    background: {
        backgroundColor: `${theme.palette.background.paper}!important`,
    },
    table:{
        "& th":{
            color: theme.palette.text.primary,
        },
        "& td":{
            color: theme.palette.text.primary,
        },
        "& span":{
            color: theme.palette.text.primary,
        }
    },
    title:{
        color: theme.palette.text.primary,
    },
    borderColor:{
        borderColor: theme.palette.border.main,
    }
}));
