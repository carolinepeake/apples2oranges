import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App.js";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import "./styles/index.css";
// import reportWebVitals from './reportWebVitals';

// const ENV = process.env.REACT_APP_ENV;

// let SERVER;
// if (ENV === "dev") {
//   SERVER = `http://${window.location.hostname}:${process.env.REACT_APP_BG_PORT}`; // Local
// } else {
//   SERVER = `https://${window.location.hostname}`; // Prod
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App
          // gameServer={SERVER}
           />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
