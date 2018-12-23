import React from "react";
import styles from "./suakitDetailSection.scss";
import ReleaseNote from "./ReleaseNote";
import axios from "axios";

class Release extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      releases: []
    }

    this.getLatestRelease = this.getLatestRelease.bind(this);
  }

  componentDidMount(){
    this.getLatestRelease(this.props.suakitId);
  }
  
  render(){
    const {intl} = this.props;
    const {releases} = this.state;
    
    return(
      <section className={styles.documentWrapper}>
        <div className={styles.title}>Release Note</div>
        <section className={styles.tableWrapper}>
        <table style={{borderTop: "2px solid #1e2b3b"}}>
          <thead />
          <tbody>
            {releases.map((re, idx) => (
              <ReleaseNote key={idx} {...re} intl={intl}/>
            ))}
          </tbody>
        </table>
        </section>
      </section>
    )
  }

  getLatestRelease(id){
    axios.get(`/api/download/release/${id}`).then(res => {
      const data = res.data;
      this.setState({
        releases: data,
      });
    });
    
  }

}

export default Release;