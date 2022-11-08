import React from "react";
import { StylesProvider, jssPreset } from "@mui/styles";
import Index from "./pages";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import { create } from "jss";
import rtl from "jss-rtl";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const App = (props) => {
  return (
    <Provider store={store}>
      <StylesProvider jss={jss}>
        <Index {...props} />
      </StylesProvider>
    </Provider>
  );
};
export default App;
