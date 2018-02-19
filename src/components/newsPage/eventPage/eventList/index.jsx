import React from "react";
import axios from "axios";
import { parse } from "query-string";
import { Link } from "react-router-dom";

import styles from "../../mediaPage/newsList/newsList.scss";

const PAGE_LIMIT = 10;

const EventItem = ({ id, title, date, place, image, content }) => {
  const subContent = content ? content.substr(0, 150) + " ..." : "";
  return (
    <Link to={`/news/event/${id}`}>
      <div className={styles.newsItem}>
        <div className={styles.imgWrapper}>
          <img src={image ? image : "http://placehold.it/300x300"} alt="" />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>
            <span>{date}</span>
            <span> | </span>
            <span>{place}</span>
          </div>
          <div className={styles.content}>{subContent}</div>
        </div>
      </div>
    </Link>
  );
};

class EventList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      totalArticleNum: 0,
      curPageNum: 0,
      newsItemList: [],
    };
    this.getArticleList = this.getArticleList.bind(this);
  }

  componentDidMount() {
    const pageNo = parse(this.props.location.search)["pageNo"] || 1;
    this.setState({ curPageNum: pageNo });
    this.getArticleList(pageNo);
  }

  componentWillReceiveProps(nextProps) {
    const pageNo = parse(nextProps.location.search)["pageNo"] || 1;
    this.setState({ curPageNum: pageNo });
    this.getArticleList(pageNo);
  }

  render() {
    const { totalArticleNum, newsItemList, curPageNum } = this.state;
    const totalPageNum = Math.ceil(totalArticleNum / 5);
    const startPageNum = (Math.ceil(curPageNum / PAGE_LIMIT) - 1) * PAGE_LIMIT + 1;
    const endPageNum = Math.min((Math.ceil(curPageNum / PAGE_LIMIT) - 1) * PAGE_LIMIT + PAGE_LIMIT, totalPageNum);
    const pageArray = [];
    for (let idx = startPageNum; idx <= endPageNum; idx++) {
      pageArray.push(idx);
    }

    return (
      <section className={styles.newsList}>
        <div className={styles.innerContainer}>
          {newsItemList.map(elem => <EventItem {...elem} />)}

          <div className={styles.pageWrapper}>
            <Link
              className={`${styles.pageLink} ${startPageNum > 1 ? "" : styles.disabled}`}
              to={`?pageNo=${startPageNum - 1}`}
            >
              &lt;
            </Link>
            {pageArray.map(elem => (
              <Link className={`${styles.pageLink} ${elem == curPageNum ? styles.active : ""}`} to={`?pageNo=${elem}`}>
                {elem}
              </Link>
            ))}
            <Link
              className={`${styles.pageLink} ${endPageNum < totalPageNum ? "" : styles.disabled}`}
              to={`?pageNo=${endPageNum + 1}`}
            >
              &gt;
            </Link>
          </div>
        </div>
      </section>
    );
  }

  getArticleList(pageNo) {
    axios.get("/api/event?pageNo=" + pageNo).then(res => {
      this.setState({
        totalArticleNum: res.headers["x-total-count"],
        newsItemList: res.data,
      });
    });
  }
}

export default EventList;