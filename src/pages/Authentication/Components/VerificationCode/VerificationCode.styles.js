import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
    body:{
        backgroundColor: `${theme.palette.background.paper}!important`
    },
    title:{
        fontSize: 35,
        fontWeight: 400,
        color: theme.palette.text.primary+'!important',
        "& span":{
            fontWeight: 700,
        }
    },
    textColor:{
        color: theme.palette.text.primary+'!important'
    },
    text:{
        fontSize: 15,
        fontWeight: 400,
        color: theme.palette.text.primary+'!important',
        opacity: 0.5,
        marginTop:30,
        marginBottom:60,
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
    button:{
        height:60,
        width:'100%'
    },
    boxTitle:{
        fontSize: 30,
        fontWeight: 700,
        color: theme.palette.text.primary+'!important',
    },
    boxText:{
        fontSize: 16,
        fontWeight: 400,
        maxWidth: 150,
        marginTop: 15,
        color: theme.palette.text.primary+'!important',
    },
    borderColor:{
        borderColor: theme.palette.input.border
    },
    pinInputWrapper:{
        "& .sc-bcXHqe":{
            width:'100%',
        },
        // general

        "& input":{
            width: '16.5%',
            height:56,
            marginRight:9,
            backgroundColor: theme.palette.input.transparent + '!important',
            boxShadow: 'none!important',
            borderColor: theme.palette.input.border,
            color: theme.palette.text.primary,
            "&:valid":{
                borderColor: theme.palette.input.border,
            },
            [theme.breakpoints.between("xs",'sm')]: {
                height:45,
            },
        },
        /*// success
        "& .jfBcaH":{
            width: 44,
            height:56,
            marginRight:9,
            backgroundColor: theme.palette.input.transparent + '!important',
            boxShadow: 'none!important',
            borderColor: theme.palette.input.border,
            color: theme.palette.text.primary,
            "&:valid":{
                borderColor: theme.palette.input.border,
            }
        },
        //error
        "& .bJVynL":{
            width: 44,
            height:56,
            marginRight:9,
            backgroundColor: theme.palette.input.transparent + '!important',
            boxShadow: 'none!important',
            borderColor: theme.palette.input.border,
            color: theme.palette.text.primary
        },*/
    }
}));
