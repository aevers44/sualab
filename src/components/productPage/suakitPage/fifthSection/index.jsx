import React from "react";

import Icon from "../../../commons/icons";
import styles from "./fifthSection.scss";

const QuestionItem = ({ question, answer }) => (
  <div className={styles.questionItem}>
    <p className={styles.question}>Q. {question}</p>
    <p className={styles.answer}>
      <Icon icon="RIGHT_SIDE_ARROW" /> A. {answer}
    </p>
  </div>
);

const FifthSection = () => (
  <section className={styles.fifthSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>FAQ</div>

      <QuestionItem
        question="유형별로 몇 장 정도의 이미지 데이터를 학습시켜야 하나요?"
        answer="이미지의 복잡성 정도에 다르지만, 초기에는 불량 유형별 100장 내외를 제공해주시면 됩니다."
      />

      <QuestionItem
        question="망 학습에 소요되는 시간은 어느 정도 걸리나요?"
        answer="학습시키는 이미지 개수에 따라 다르지만 1024*1024 사이즈, 1,000장 기준으로 20분 내외의 시간이 소요됩니다."
      />

      <QuestionItem
        question="검사라인에서 이미지 데이터를 처리하는 속도가 어떻게 되나요?"
        answer="Segmentation / Geforce GTX-1080Ti 기준 1024X1024 사이즈 이미지에 대해 실시간으로 초당 20장 내외로 처리가 가능합니다"
      />

      <QuestionItem
        question="SuaKIT 사용에 대한 교육, 혹은 세미나가 진행되나요?"
        answer="제품문의를 주실 경우 직접 방문하여 SuaKIT에 대한 설명 및 사용법을 알려드리며, SuaKIT 대여, 혹은 구매 후 공식적인 Tutorial이 진행됩니다."
      />

      <QuestionItem
        question="SuaKIT과 기존 검사 알고리즘이 연동 가능한가요? 가능하다면 어떤 방식으로 진행되나요?"
        answer={`SuaKIT은 C++, C# API를 제공하고 있습니다. 기존 검사 알고리즘이 C++, C#으로 개발되어 있다면 API를 통해 쉽게 연동할 수 있습니다.`}
      />

      <QuestionItem
        question="SuaKIT 데모 버전이 있나요?"
        answer={`없습니다. 대신 영업일 기준 20일 동안 SuaKIT을 대여할 수 있으며, 필요시 추가 계약을 통해 1회 연장할 수 있습니다.`}
      />
    </div>
  </section>
);

export default FifthSection;
