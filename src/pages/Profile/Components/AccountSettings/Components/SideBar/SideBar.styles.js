import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
    body:{
        backgroundColor: `${theme.palette.secondBackground.main}!important`,
        borderColor: `${theme.palette.input.border}!important`,
        borderRadius: 10,
    },
}));
