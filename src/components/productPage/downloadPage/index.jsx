import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import SuakitListSection from "./suakitListSection";
import SuakitDetailSection from "./suakitDetailSection";

import DocumentSection from "./documentSection";
import ReleaseSection from "./releaseSection";
import SuakitSection from "./suakitSection";

import AuthSection from "./authSection";

import styles from "./downloadPage.scss";

class DownloadPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isAuthed: false,
      companyName: "",
      companyKey: "",
      selectedSuakit: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.onSelectSuakit = this.onSelectSuakit.bind(this);
    this.onResetSelected = this.onResetSelected.bind(this);
  }

  onSelectSuakit(id) {
    this.setState({
      selectedSuakit: id
    })
  }

  onResetSelected(){
    this.setState({
      selectedSuakit: null
    })
  }

  render() {
    const { intl } = this.props;
    const { isAuthed, companyName, companyKey, selectedSuakit } = this.state;

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
          <React.Fragment>
            {
              selectedSuakit ? (
                <div>
                  <SuakitDetailSection 
                    suakitId={selectedSuakit} 
                    onBack={this.onResetSelected} 
                    intl={intl}
                    companyName={companyName}
                    companyKey={companyKey}
                  />
                </div>
              ) : <SuakitListSection onSelect={this.onSelectSuakit}/>
            }
            
          </React.Fragment>  
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

// <SuakitSection
//   intl={intl}
//   companyName={companyName}
//   companyKey={companyKey}
// />
// <DocumentSection intl={intl} />
// <ReleaseSection intl={intl} />