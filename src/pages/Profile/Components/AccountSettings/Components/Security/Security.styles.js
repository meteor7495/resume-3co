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
        "&.readOnly":{
            height: 39,
            "& .MuiInputBase-root": {
                fontSize: '0.75rem!important',
                color: theme.palette.text.primary,
                "& input": {
                    textFillColor: theme.palette.text.primary,
                    textAlign: 'center',
                    cursor: 'pointer!important'
                }
            }
        }
    },
    tooltip:{
        backgroundColor: theme.palette.success.main,
    },
    tooltipColor:{
        color: theme.palette.success.main,
    }
}));