import React from "react";
import styles from "./suakitDetailSection.scss";
import axios from "axios";

class Documentation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      basics: [],
      programmers: [],
      applications:[],
      basicsOpen: true,
      programmersOpen: true,
      applicationsOpen: true,
    }
    this.getDocuments = this.getDocuments.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  componentDidMount() {
    this.getDocuments(this.props.suakitId);
  }

  onOpen(field){
    this.setState({ [field]: !this.state[field]})
  }

  render() {
    const {basics, programmers, applications, basicsOpen, programmersOpen, applicationsOpen} = this.state;
    const { intl } = this.props;
    return (
      <section className={styles.documentWrapper}>
        <div className={styles.title}>Documentation</div>
        <div className={styles.tableWrapper}>
          <table style={{borderTop: "2px solid #1e2b3b"}}>
            <thead>
              <tr>
                <td colSpan={2}>Basic Document</td>
                <td className={styles.detail}
                onClick={() => this.onOpen("basicsOpen")}
                >
                { basicsOpen ? intl.formatMessage({ id: "DOWNLOAD.SUAKIT.fold" }) : intl.formatMessage({ id: "DOWNLOAD.SUAKIT.detail" })}
                </td>
              </tr>
            </thead>
            <tbody>
            {
              basicsOpen ? (
              basics.map(doc => (
                <tr key={doc.id}>
                  <td style={{width:"10%"}}>{doc.version}</td>
                  <td style={{width:"70%"}}>{intl.locale === "ko" ? doc.name : doc.en_name}</td>
                  <td style={{width:"20%", textAlign:"right", textDecoration: "underline"}}>
                    <a 
                      href={intl.locale === "ko" ? doc.link : doc.en_link || doc.link}
                      target="__blank"
                    >
                    Download
                    </a>
                  </td>
                </tr>
              ))
              ) : null
            }
            </tbody>
          </table>

          <table style={{borderTop: "1px solid #bbbbbb"}}>
            <thead>
              <tr>
                <td colSpan={2}>API Document</td>
                <td className={styles.detail}
                onClick={() => this.onOpen("programmersOpen")}
                >
                { programmersOpen ? intl.formatMessage({ id: "DOWNLOAD.SUAKIT.fold" }) : intl.formatMessage({ id: "DOWNLOAD.SUAKIT.detail" })}
                </td>
              </tr>
            </thead>
            <tbody>
            {
              programmersOpen ? (
                programmers.map(doc => (
                  <tr key={doc.id}>
                    <td style={{width:"10%"}}>{doc.version}</td>
                    <td style={{width:"70%"}}>{intl.locale === "ko" ? doc.name : doc.en_name}</td>
                    <td style={{width:"20%", textAlign:"right", textDecoration: "underline"}}>
                      <a 
                        href={intl.locale === "ko" ? doc.link : doc.en_link || doc.link}
                        target="__blank"
                      >
                      Download
                      </a>
                    </td>
                  </tr>
                ))
              ) : null
            }
            </tbody>
          </table>

          <table style={{borderTop: "1px solid #bbbbbb"}}>
            <thead>
              <tr>
                <td colSpan={2}>Application Notes</td>
                <td className={styles.detail}
                onClick={() => this.onOpen("applicationsOpen")}
                >
                { applicationsOpen ? intl.formatMessage({ id: "DOWNLOAD.SUAKIT.fold" }) : intl.formatMessage({ id: "DOWNLOAD.SUAKIT.detail" })}
                </td>
              </tr>
            </thead>
            <tbody>
            {
              applicationsOpen ? (
                applications.map(doc => (
                  <tr key={doc.id}>
                    <td style={{width:"10%"}}>{doc.version}</td>
                    <td style={{width:"70%"}}>{intl.locale === "ko" ? doc.name : doc.en_name}</td>
                    <td style={{width:"20%", textAlign:"right", textDecoration: "underline"}}>
                      <a 
                        href={intl.locale === "ko" ? doc.link : doc.en_link || doc.link}
                        target="__blank"
                      >
                      Download
                      </a>
                    </td>
                  </tr>
                ))
              ) 
              : null
            }
            </tbody>
          </table>
        </div>
      </section>
    )
  }

  getDocuments(id){
    axios.get(`/api/download/document/${id}`).then(res => {
      const data = res.data;
      this.setState({
        basics: data.filter(d => d.type === "basics"),
        programmers: data.filter(d => d.type === "for_programmers"),
        applications: data.filter(d => d.type === "application_notes"),
      });
    });
  }
}

export default Documentation;