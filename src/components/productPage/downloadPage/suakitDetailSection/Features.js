import React from "react";
import styles from "./suakitDetailSection.scss";
import axios from "axios";
import Documentation from "./Documentation";

class Features extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      features: []
    };
    this.getFeatures = this.getFeatures.bind(this);
  }

  componentDidMount(){
    this.getFeatures(this.props.suakitId)
  }

  render() {
    const { intl } = this.props;
    const { features } = this.state;

    const imageUrl = elem => {
      return {
        ko: elem.image || elem.image_en,
        en: elem.image_en || elem.image,
      };
    };

    return (
      <section className={styles.featureSection}>
        <div className={styles.title}>New Features</div>
        {features.map((elem, idx) => (
          <div className={styles.featureItem} key={idx}>
            <div className={styles.featureTitle}>{intl.locale === "ko" ? elem.title : elem.en_title}</div>
            <div
              className={styles.featureImage}
              style={{ backgroundImage: `url(${imageUrl(elem)[intl.locale]})` }}
            />
            <div className={styles.featureContent}>{intl.locale === "ko" ? elem.content : elem.en_content}</div>
          </div>
        ))}
        <Documentation suakitId={this.props.suakitId} intl={intl}/>
      </section>
    )
  }

  getFeatures(id){
    axios.get(`/api/download/features/${id}`).then(res => {
      const data = res.data;
      this.setState({
        features: data
      });
    });
  }
}

export default Features;