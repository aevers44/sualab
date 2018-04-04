import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import SuakitSection from "./suakitSection";
import FeatureSection from "./featureSection";
import DocumentSection from "./documentSection";
import ReleaseSection from "./releaseSection";

import styles from "./downloadPage.scss";

class DownloadPage extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return (
      <section className={styles.downloadPage}>
        <TitleSection
          subTitle="DOWNLOAD"
          title={intl.formatMessage({ id: "DOWNLOAD.title" })}
          bgImage="https://d2ivzy5c3eic08.cloudfront.net/productPage/product-download%402x.png"
        />

        <SuakitSection intl={intl} />
        <FeatureSection intl={intl} />
        <DocumentSection intl={intl} />
        <ReleaseSection intl={intl} />
      </section>
    );
  }
}

export default injectIntl(DownloadPage);
