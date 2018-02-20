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
    this.getRecentArticles();
  }

  render() {
    const { recentArticles } = this.state;
    return (
      <section className={styles.fifthContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.title}>NEWS</div>
          <div className={styles.bigTitle}>최신 소식</div>

          <div className={styles.newsWrapper}>{recentArticles.map(elem => <RecentItem {...elem} />)}</div>

          <Link to="/news/media" className={styles.readmoreBtn}>
            Read More
            <img src="https://d3rqapinkc8b8p.cloudfront.net/mainPage/combined-shape@2x.png" alt="" />
          </Link>
        </div>
      </section>
    );
  }

  getRecentArticles() {
    axios.get("/api/media").then(res => {
      const result = res.data.slice(0, 3);
      console.log(result);
      this.setState({
        recentArticles: result,
      });
    });
  }
}

export default FifthContainer;
