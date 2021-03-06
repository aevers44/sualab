import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./fifthContainer.scss";

const RecentItem = ({ id, media, title }) => (
  <div className={styles.newsItem}>
    <Link to={`/news/media/${id}`} className={styles.newsLink}>
      <div className={styles.newsHeader}>{media}</div>
      <div className={styles.newsTitle}>{title}</div>
    </Link>
  </div>
);

class FifthContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      recentArticles: [],
    };
    this.getRecentArticles = this.getRecentArticles.bind(this);
  }

  componentDidMount() {
    this.getRecentArticles(this.props.intl.locale);
  }

  componentWillReceiveProps(nextProps) {
    this.getRecentArticles(nextProps.intl.locale);
  }

  render() {
    const { intl } = this.props;
    const { recentArticles } = this.state;
    return (
      <section className={styles.fifthContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.title}>NEWS</div>
          <div className={styles.bigTitle}>{intl.formatMessage({ id: "MAIN.FIFTH.bigTitle" })}</div>

          <div className={styles.newsWrapper}>
            {recentArticles.map((elem, idx) => <RecentItem key={idx} {...elem} />)}
          </div>

          <Link to="/news/media" className={styles.readmoreBtn}>
            Read More
            <img src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/combined-shape@2x.png" alt="" />
          </Link>
        </div>
      </section>
    );
  }

  getRecentArticles(locale) {
    const apiUrl = `/api/media${locale !== "ko" ? "-en" : ""}`;
    axios.get(apiUrl).then(res => {
      const result = res.data.slice(0, 3);
      this.setState({
        recentArticles: result,
      });
    });
  }
}

export default FifthContainer;
