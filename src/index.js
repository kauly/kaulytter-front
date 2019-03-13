import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";
import Login from "./pages/login";
import { install } from "@material-ui/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./themes/themes";

install();

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
