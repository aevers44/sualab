import React from "react";
import { injectIntl } from "react-intl";

import styles from "./downloadPage.scss";
import TitleSection from "../../commons/titleSection";

class DownloadPage extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return (
      <section className={styles.downloadPage}>
        <TitleSection subTitle="DOWNLOAD" title={intl.formatMessage({ id: "DOWNLOAD.title" })} bgImage="" />
        hello world
      </section>
    );
  }
}

export default injectIntl(DownloadPage);
