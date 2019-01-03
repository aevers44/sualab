import React from "react";
import styles from "./infoBar.scss";

const setCookie = (name, value, exp) => {
  const date = new Date();
  date.setTime(date.getTime() + exp*24*60*60*1000);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

const getCookie = (name) => {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value? value[2] : null;
}

class InfoBar extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
      checked: false,
      show: false
    }

    this.onShowPolicy = this.onShowPolicy.bind(this);
    this.onClosePopup = this.onClosePopup.bind(this);
  }

  componentWillMount(){
    const checkedCookie = getCookie(`privacyPolicy`);
    if (checkedCookie === null){
      this.setState({
        show: true
      })
    }
  }

  onClosePopup(){
    setCookie(`privacyPolicy`, "on", 365);
    this.setState({ show: false })
  }

  onShowPolicy(){
    this.props.onPolicy();
  }

  render(){
    return(
      this.state.show ?
      <section className={styles.barWrapper}>
        <div></div>
        <div className={styles.message}>
          Cookies are required to provide our services. By using our website you agree to the use of cookies. 
          Find more information and details our <span className={styles.policy} onClick={this.onShowPolicy}>Privacy Policy</span>
        </div>
        <div className={styles.close} onClick={this.onClosePopup}>
          <img alt="" src={"https://s3.ap-northeast-2.amazonaws.com/sualab-asset/upload/icon/close.png"} style={{width: "14px", height: "14px"}}/>
        </div>
      </section> : <div></div>
    )
  }
}

export default InfoBar;