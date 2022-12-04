import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
    body: {
        backgroundColor: `${theme.palette.background.paper}`,
    },
    textColor:{
        color: theme.palette.text.primary,
    }
}));
