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
    },
    text:{
        color: theme.palette.text.primary+'!important',
        fontWeight: 300,
        fontSize: 16,
        textAlign:'justify'
    },

    button:{
        height:60,
        width:170,
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        background: '#000000',
        border: '0.260319px solid #FFFFFF'
    },
}));
