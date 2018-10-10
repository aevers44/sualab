import React from "react";
import PropTypes from "prop-types";
import { parse } from "query-string";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ko from "react-intl/locale-data/ko";

import locale from "./locale";

addLocaleData([...en, ...ko]);
let defaultLang = navigator.language || navigator.userLanguage || navigator.languages[0];
defaultLang = defaultLang.split("-")[0];
if (defaultLang !== "ko") {
  defaultLang = "en";
}

class MyIntlProvider extends React.Component {
  getChildContext() {
    return {
      changeLocale: this.changeLocale,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      currentLang: defaultLang,
    };
    this.changeLocale = this.changeLocale.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    const { currentLang } = this.state;
    const { children } = this.props;

    return (
      <IntlProvider locale={currentLang} messages={locale[currentLang]}>
        {React.Children.only(children)}
      </IntlProvider>
    );
  }

  changeLocale() {
    const { currentLang } = this.state;

    if (currentLang !== "ko") {
      this.setState({
        currentLang: "ko",
      });
    } else {
      this.setState({
        currentLang: "en",
      });
    }
  }
}

MyIntlProvider.childContextTypes = {
  changeLocale: PropTypes.func,
};

export default MyIntlProvider;
