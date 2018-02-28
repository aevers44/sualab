import React from "react";
import { parse } from "query-string";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ko from "react-intl/locale-data/ko";

import locale from "./locale";

addLocaleData([...en, ...ko]);
let defaultLang = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
defaultLang = defaultLang.split("-")[0];

class MyIntlProvider extends React.Component {
  constructor(props) {
    super(props);

    const lang = parse(location.search)["lang"];
    let newLang = "ko";
    if (lang !== undefined) {
      if (lang !== "ko" && lang !== "en") {
        newLang = "en";
      } else {
        newLang = lang;
      }
    } else {
      newLang = defaultLang;
    }
    this.state = {
      currentLang: newLang,
    };

    this.changeLocale = this.changeLocale.bind(this);
  }

  render() {
    const { currentLang } = this.state;
    const { children } = this.props;

    return (
      <IntlProvider locale={currentLang} messages={locale[currentLang]}>
        {children}
      </IntlProvider>
    );
  }

  changeLocale(lang) {
    this.setState({
      currentLang: lang,
    });
  }
}

export default MyIntlProvider;
