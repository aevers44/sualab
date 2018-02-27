import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ko from "react-intl/locale-data/ko";

import ReactModal from "react-modal";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";

import locale from "./components/commons/intl/locale";

addLocaleData([...en, ...ko]);
const defaultLang = "ko";

ReactModal.setAppElement("#root");

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <IntlProvider locale={defaultLang} messages={locale[defaultLang]}>
        <Component />
      </IntlProvider>
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
