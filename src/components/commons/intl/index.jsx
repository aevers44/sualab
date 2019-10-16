import React from "react";
import PropTypes from "prop-types";
import { parse } from "query-string";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ko from "react-intl/locale-data/ko";

import locale from "./locale";


const setLangCookie = (value, exp) => {
    const date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = 'lang=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

const getLangCookie = () => {
    const value = document.cookie.match('(^|;) ?lang=([^;]*)(;|$)');
    return value? value[2] : null;
}

addLocaleData([...en, ...ko]);
let defaultLang = navigator.language || navigator.userLanguage || navigator.languages[0];
defaultLang = defaultLang.split("-")[0];
if (defaultLang !== "ko") {
  defaultLang = "en";
}

let cookieLang = getLangCookie();
if(cookieLang != null)
	defaultLang = cookieLang;

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
	  setLangCookie("ko", 1);
      this.setState({
        currentLang: "ko",
      });
    } else {
	  setLangCookie("en", 1);
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
