import React from "react";
import { Link } from "react-router-dom";

import Icon from "../../commons/icons";
import styles from "./newsDetail.scss";

const testData = {
  title: "인공지능 스타트업 SUALAB, 한국공항공사와 AI 딥러닝 활용 기술 제공 및 공동연구개발 협약",
  date: "2017-11-16",
  media: "매일 경제",
  link: "http://news.mk.co.kr/newsRead.php?year=2017&no=773408",
  image: "http://placehold.it/720x400",
  content: `‘4차 산업 시대 스마트팩토리 구현을 위한 산업전략 세미나’가 지난 6월 1일(목) 상암동 중소기업 DMC타워 3층 대회의실에서 성황리에 개최됐다.

    해당 세미나는 △스마트팩토리 삼국지(LG경제연구소 나준호 전문위원) △스마트팩토리 표준 및 기술 현황(한양대학교 홍승호 교수) △스마트팩토리 국내 산업 모델 팩토리 구축 사례(한국생산기술연구원 조용주 수석연구원) △Siemens_Digitalization solution & Open IoT Operating System(지멘스 최유순 부장) △유연생산체계를 구현하는 Smart Factory(딜로이트컨설팅 김승택 이사) △Industry 4.0을 대비한 KUKA Robot의 대응과 유럽내 실제 적용 사례 소개(쿠카로보틱스코리아 이창훈 대표이사) 등의 내용으로 구성되었다.

    SUALAB 측에서는 '4차혁명시대와 딥러닝 스마트팩토리 솔루션' 의 주제로, 이동희 이사가 발표를 진행했다. 발표는 <인공지능으로 인한 스마트팩토리 내 지각변동 영역>, <딥러닝의 개념과 주요 연구분야>, <산업 현장에서 딥러닝 적용의 한계와 그에 대한 SUALAB의 솔루션>으로 구성되었다.

    이동희 이사는 스마트 팩토리의 근본적인 목표는 양질의 제품을 효율적으로 생산하여 소비자에게 공급하는 것이며, SUALAB의 인공지능 기반 머신비전 솔루션이 해당 분야의 발전에 일조할 것이라고 자신했다.

    SUALAB은 현재 딥러닝 기반 머신비전 S/W 라이브러리 'SuaKIT', 딥러닝 기반 검사장비 'SuaGEAR', 딥러닝 기반 공정 최적화 솔루션 'SuaFAB'을 연구 개발 및 판매 중에 있다.
    `,
};

const NewsDetail = ({ match }) => {
  const number = parseInt(match.params.number);

  return (
    <section className={styles.newsDetail}>
      <div className={styles.innerContainer}>
        <div className={styles.detailWrapper}>
          <div className={styles.line} />
          <div className={styles.title}>{testData.title}</div>
          <div className={styles.date}>
            <span>{testData.date}</span>
            <span> | </span>
            <span>{testData.media}</span>
          </div>
          <div className={styles.link}>
            <a href={testData.link}>{testData.link}</a>
          </div>
          <div className={styles.grayLine} />
          <div className={styles.imgWrapper}>
            <img src={testData.image} alt="" />
          </div>
          <div className={styles.content}>{testData.content}</div>
        </div>

        <div className={styles.otherArticle}>
          <Link to={`/news/media/${number - 1}`} className={styles.linkWrapper}>
            <div className={styles.iconWrapper}>
              <Icon icon="ARROW_UP" />
              <span className={styles.label}>이전 글</span>
            </div>
            <div className={styles.article}>한국 인공지능 스타트업 SUALAB, 세계 최대 자동화 컨퍼런스서 대상 수상</div>
          </Link>
          <Link to={`/news/media/${number + 1}`} className={styles.linkWrapper}>
            <div className={styles.iconWrapper}>
              <Icon icon="ARROW_DOWN" />
              <span className={styles.label}>다음 글</span>
            </div>
            <div className={styles.article}>SUALAB, 한국공항공사와 영상 자동 판독 솔루션 연구한다</div>
          </Link>
        </div>

        <Link to="/news/media" className={styles.listBtn}>
          목록으로 돌아가기
        </Link>
      </div>
    </section>
  );
};

export default NewsDetail;
