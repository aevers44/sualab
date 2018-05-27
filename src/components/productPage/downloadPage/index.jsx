import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import SuakitSection from "./suakitSection";
import FeatureSection from "./featureSection";
import DocumentSection from "./documentSection";
import ReleaseSection from "./releaseSection";
import PreviousSection from "./previousSection";

import AuthSection from "./authSection";

import styles from "./downloadPage.scss";

class DownloadPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isAuthed: false,
      companyName: "",
      companyKey: "",
    };

    this.handleAuth = this.handleAuth.bind(this);
  }

  render() {
    const { intl } = this.props;
    const { isAuthed, companyName, companyKey } = this.state;

    return (
      <section className={styles.downloadPage}>
        <TitleSection
          subTitle="DOWNLOAD"
          title={intl.formatMessage({ id: "DOWNLOAD.title" })}
          bgImage="https://d2ivzy5c3eic08.cloudfront.net/productPage/product-download%402x.png"
        />

        {!isAuthed ? (
          <AuthSection intl={intl} handleAuth={this.handleAuth} />
        ) : (
          <div>
            <SuakitSection intl={intl} companyName={companyName} companyKey={companyKey} />
            <FeatureSection intl={intl} />
            <PreviousSection intl={intl} companyName={companyName} companyKey={companyKey} />
            <DocumentSection intl={intl} />
            <ReleaseSection intl={intl} />
          </div>
        )}
      </section>
    );
  }

  handleAuth(res, companyName, companyKey) {
    this.setState({
      isAuthed: res,
      companyName: companyName,
      companyKey: companyKey,
    });
  }
}

export default injectIntl(DownloadPage);
