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
    },
    tableBody:{
        "& tr":{
            height:49,
            "&:nth-child(odd)":{
                backgroundColor: theme.palette.box.bgBlueTransparent
            }
        }
    },
    ticketTitle:{
        color: theme.palette.textColor.gray
    },
    uploadBox:{
        backgroundColor: theme.palette.box.uploadBox
    }
}));
