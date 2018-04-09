import React from "react";
import axios from "axios";

import styles from "./authSection.scss";

class AuthSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      companyKey: "",
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getAuthentication = this.getAuthentication.bind(this);
  }

  render() {
    const { companyName, companyKey } = this.state;
    const { intl, handleAuth } = this.props;

    return (
      <section className={styles.authSection}>
        <div className={styles.innerContainer}>
          <h2>SuaKIT Download</h2>
          <label htmlFor="companyName" className={styles.label}>
            {intl.formatMessage({ id: "DOWNLOAD.AUTH.companyName" })}
          </label>
          <input
            type="text"
            className={styles.textForm}
            id="companyName"
            onChange={ev => this.handleChange(ev, "companyName")}
            onKeyPress={ev => this.handleKeyPress(ev, handleAuth)}
            value={this.state.companyName}
            name="companyName"
          />
          <label htmlFor="companyKey" className={styles.label}>
            {intl.formatMessage({ id: "DOWNLOAD.AUTH.companyKey" })}
          </label>
          <input
            type="password"
            className={styles.textForm}
            id="companyKey"
            onChange={ev => this.handleChange(ev, "companyKey")}
            onKeyPress={ev => this.handleKeyPress(ev, handleAuth)}
            value={this.state.companyKey}
            name="companyKey"
          />
          <button onClick={ev => this.getAuthentication(ev, handleAuth)} className={styles.submitBtn}>
            {intl.formatMessage({ id: "DOWNLOAD.AUTH.authBtn" })}
          </button>
        </div>
      </section>
    );
  }

  handleKeyPress(ev, handleAuth) {
    if (ev.key === "Enter" && ev.shiftKey === false) {
      ev.preventDefault();
      this.getAuthentication(ev, handleAuth);
    }
  }

  handleChange(ev, type) {
    const value = ev.target.value;
    this.setState({
      [type]: value,
    });
  }

  getAuthentication(ev, handleAuth) {
    ev.preventDefault();
    const { intl } = this.props;
    const { companyName, companyKey } = this.state;

    const formData = {};
    formData["name"] = companyName;
    formData["key"] = companyKey;

    axios.post("/api/download/auth", formData).then(res => {
      if (res.data.auth) {
        handleAuth(res.data.auth, companyName, companyKey);
      } else {
        alert(intl.formatMessage({ id: "DOWNLOAD.AUTH.authFailMessage" }));
        handleAuth(res.data.auth, companyName, companyKey);
      }
    });
  }
}

export default AuthSection;
