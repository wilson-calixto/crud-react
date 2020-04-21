import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import * as serviceWorker from "./serviceWorker";
// ReactDOM.render(
//   <React.StrictMode>
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import  {createMuiTheme,MuiThemeProvider} from "@material-ui/core";
import THEME from "./theme";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
   <App />
  </MuiThemeProvider>, 
  rootElement
);