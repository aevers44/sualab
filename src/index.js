import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";

ReactModal.setAppElement("#root");

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root"),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
