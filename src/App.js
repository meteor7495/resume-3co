import React from "react";
import { jssPreset } from "@mui/styles";
import Index from "./pages";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import { create } from "jss";
import rtl from "jss-rtl";
import { StyledEngineProvider } from "@mui/material";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const App = (props) => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst jss={jss}>
        <Index {...props} />
      </StyledEngineProvider>
    </Provider>
  );
};
export default App;
