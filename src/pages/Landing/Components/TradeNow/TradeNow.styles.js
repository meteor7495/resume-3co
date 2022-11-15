import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
    body: {
        backgroundColor: `${theme.palette.background.lightBlue}!important`,
    },
    background: {
        backgroundColor: `${theme.palette.background.paper}!important`,
    },
    title:{
        color: theme.palette.text.primary+'!important',
        fontWeight: 700,
        fontSize: 25,
        marginBottom: 20,
    },
    text:{
        color: theme.palette.text.primary+'!important',
        fontWeight: 300,
        fontSize: 16,
        marginBottom: 20,
    },

    button:{
        height:60,
        width:170,
    },
}));
