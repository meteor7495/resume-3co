import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
    body:{
        backgroundColor: `${theme.palette.secondBackground.main}!important`,
        borderColor: `${theme.palette.input.border}!important`,
        borderRadius: 10,
    },
    inputStyle:{
        width:'100%',
        height:60,
        backgroundColor: theme.palette.input.transparent + '!important',
        "& fieldset":{
            borderColor: theme.palette.input.border + '!important',
        },
        "& .Mui-error": {
            "& fieldset": {
                borderColor: theme.palette.error.main + '!important',
            },
        },
        "& .MuiInputBase-root":{
            height: '100%',
            backgroundColor: 'transparent!important',
            "& ::placeholder":{
                color: theme.palette.input.placeholder + '!important',
            },
            "& input":{
                backgroundColor: 'transparent!important',
            }
        },
    },
}));