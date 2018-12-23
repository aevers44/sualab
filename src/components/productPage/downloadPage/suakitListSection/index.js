import React from "react";
import axios from "axios";

import styles from "./suakitListSection.scss";

class SuakitListSection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      suakits: []
    }
  }

  componentDidMount() {
    this.getSuakitList();
  }

  render() {
    const {suakits} = this.state;
    return (
      <section className={styles.suakitWrapper}>
        {
          suakits.map(suakit => (
            <div key={suakit.id} 
              className={styles.suakit}
              onClick={() => this.props.onSelect(suakit.id)}
            >
              {
                suakit.latest ? 
                <div className={styles.latest}>Latest Update</div>
                : ""
              }
              <div>
                <div className={styles.name}>{suakit.name}</div>
                <div className={styles.date}>RELEASED {suakit.date}</div>
              </div>
              <div className={styles.next}></div>
            </div>
          ))
        }
        </section>
    )
  }

  getSuakitList() {
    axios.get("/api/download/suakits").then(res => {
      const data = res.data;
      this.setState({
        suakits: data
      });
    });
  }
}

export default SuakitListSection;