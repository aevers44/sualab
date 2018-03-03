import React from "react";
import ReactDOM from "react-dom";

import ReactModal from "react-modal";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";

import MyIntlProvider from "./components/commons/intl";

ReactModal.setAppElement("#root");

ReactDOM.render(
  <AppContainer>
    <MyIntlProvider>
      <App />
    </MyIntlProvider>
  </AppContainer>,
  document.getElementById("root"),
);
