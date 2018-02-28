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

const FifthSection = ({ intl }) => (
  <section className={styles.fifthSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>FAQ</div>

      <QuestionItem
        question={intl.formatMessage({ id: "SUAKIT.FIFTH.question_1" })}
        answer={intl.formatMessage({ id: "SUAKIT.FIFTH.answer_1" })}
      />

      <QuestionItem
        question={intl.formatMessage({ id: "SUAKIT.FIFTH.question_2" })}
        answer={intl.formatMessage({ id: "SUAKIT.FIFTH.answer_2" })}
      />

      <QuestionItem
        question={intl.formatMessage({ id: "SUAKIT.FIFTH.question_3" })}
        answer={intl.formatMessage({ id: "SUAKIT.FIFTH.answer_3" })}
      />

      <QuestionItem
        question={intl.formatMessage({ id: "SUAKIT.FIFTH.question_4" })}
        answer={intl.formatMessage({ id: "SUAKIT.FIFTH.answer_4" })}
      />

      <QuestionItem
        question={intl.formatMessage({ id: "SUAKIT.FIFTH.question_5" })}
        answer={intl.formatMessage({ id: "SUAKIT.FIFTH.answer_5" })}
      />

      <QuestionItem
        question={intl.formatMessage({ id: "SUAKIT.FIFTH.question_6" })}
        answer={intl.formatMessage({ id: "SUAKIT.FIFTH.answer_6" })}
      />
    </div>
  </section>
);

export default FifthSection;
