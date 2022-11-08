import React, {useEffect, useState} from "react";
import {Backdrop, CircularProgress} from '@mui/material';
import {useSelector} from "react-redux";

export default function Loading(props) {
    const [uiVisible, setUiVisible] = useState(false);
    const {visible, text} = useSelector((state) => state.loading);
    useEffect(() => {
        setUiVisible(visible);
    }, [visible])
    return (
        <Backdrop
            style={{ zIndex: 999999 ,background:'rgba(255,255,255,0.5)'}}
            open={uiVisible}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    );
}
