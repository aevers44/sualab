import React from "react";
import styles from "./suakitDetailSection.scss";
import nl2br from "react-nl2br";

class ReleaseNote extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(){
    this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    const {isOpen} = this.state;
    const { intl, id, version, date, content, en_content } = this.props;
    const printContent = intl.locale === "ko" ? content : en_content || content;

    return (
      <React.Fragment key={id}>
        <tr onClick={() => this.onSelect(id)} className={ isOpen ? styles.details : ""}>
          <td style={{ width: "20%" }}>{version}</td>
          <td style={{ width: "20%" }}>{date}</td>
          <td style={{ width: "60%", textDecoration: "underline", cursor:"pointer" }}> 
          { isOpen ? intl.formatMessage({ id: "DOWNLOAD.RELEASE.fold" }) : intl.formatMessage({ id: "DOWNLOAD.RELEASE.detail" })}
          </td>
        </tr>
        {isOpen ? (
          <tr key={id} className={styles.details}>
            <td style={{ width: "20%" }}></td>
            <td style={{ width: "20%" }}></td>
            <td style={{ width: "60%" }}>{nl2br(printContent)}</td>
          </tr>
        ) : (
          <tr></tr>
        )}
      </React.Fragment>
    )
  }
}

export default ReleaseNote;