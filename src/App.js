import React from "react";
import { jssPreset } from "@mui/styles";
import Index from "./pages";
import store from "./store";
import Provider from "react-redux/es/components/Provider";
import { create } from "jss";
import rtl from "jss-rtl";
import { StyledEngineProvider } from "@mui/material";
import axios from "axios";
import { API_URL } from "configs";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const App = (props) => {
axios.defaults.baseURL = API_URL;
return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst jss={jss}>
        <Index {...props} />
      </StyledEngineProvider>
    </Provider>
  );
};
export default App;
