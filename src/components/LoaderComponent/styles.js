import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
    divLoader: {
        width: "100%",
        height: "100vh",
        backgroundColor: "#00000080",
        opacity: 0.8,
        position: " fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& > p": {
            color: "#fff",
            fontSize: 35,
        }
    }
}));
