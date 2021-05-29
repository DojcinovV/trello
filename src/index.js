import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Theme from "./theme/Theme";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline } from "@material-ui/core";

import { store, persistor } from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <CssBaseline></CssBaseline>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Theme>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
