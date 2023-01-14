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
import { ethers } from "ethers";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const App = (props) => {
  axios.defaults.baseURL = API_URL;

  Number.prototype.toFixedNumber = function (n) {
    return this > 0 ? parseFloat((+this).toFixed(n ? n : 8)) : "";
  };

  String.prototype.toFixedNumber = function (n) {
    return this > 0 ? parseFloat((+this).toFixed(n ? n : 8)) : "";
  };

  String.prototype.toNormalNumber = function () {
    return this > 0
      ? ethers.utils.formatUnits(this.toString(), 8).toString()
      : "0";
  };

  Number.prototype.toNormalNumber = function () {
    return this > 0
      ? ethers.utils.formatUnits(this.toString(), 8).toString()
      : "0";
  };

  String.prototype.toCurrency = function () {
    return ethers.utils.parseUnits(this.toString(), 8).toString();
  };

  Number.prototype.toCurrency = function () {
    return ethers.utils.parseUnits(this.toString(), 8).toString();
  };

  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst jss={jss}>
        <Index {...props} />
      </StyledEngineProvider>
    </Provider>
  );
};
export default App;
