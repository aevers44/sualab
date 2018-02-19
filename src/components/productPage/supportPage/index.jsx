import React from "react";

import TitleSection from "../../commons/titleSection";
import ProductForm from "./productForm";
import PartnershipForm from "./partnershipForm";
import EtcForm from "./etcForm";

import styles from "./supportPage.scss";

const PRODUCT_FORM = 0;
const PARTNERSHIP_FORM = 1;
const ETC_FORM = 2;

class SupportPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      formType: PRODUCT_FORM,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  render() {
    const { formType } = this.state;
    let restForm = null;
    if (parseInt(formType) === PRODUCT_FORM) {
      restForm = <ProductForm />;
    } else if (parseInt(formType) === PARTNERSHIP_FORM) {
      restForm = <PartnershipForm />;
    } else {
      restForm = <EtcForm />;
    }

    return (
      <section className={styles.supportPage}>
        <TitleSection
          subTitle="COUSTOMER SUPPORT"
          title="SUALAB의 딥러닝 검사 솔루션에 대한 고객분들의 *문의*를 기다립니다"
          bgImage="https://d3rqapinkc8b8p.cloudfront.net/productPage/support-background%402x.jpg"
        />

        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.subTitle}>제품 문의</div>

          <div className={styles.formWrapper}>
            <div className={styles.inputWrapper}>
              <label htmlFor="name" className={styles.label}>
                이름*
              </label>
              <input type="text" className={styles.textForm} id="name" name="name" />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="phone" className={styles.label}>
                전화번호*
              </label>
              <input type="text" className={styles.textForm} id="phone" name="phone" />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="company" className={styles.label}>
                회사*
              </label>
              <input type="text" className={styles.textForm} id="company" name="company" />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="status" className={styles.label}>
                직급
              </label>
              <input type="text" className={styles.textForm} id="status" name="status" />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="email" className={styles.label}>
                Email*
              </label>
              <input type="email" className={styles.textForm} id="email" name="email" />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="country" className={styles.label}>
                국가
              </label>
              <input type="text" className={styles.textForm} id="country" name="country" />
            </div>
          </div>

          <div className={`${styles.selectWrapper} ${styles.reasonSelect}`}>
            <label htmlFor="reason" className={styles.label}>
              문의이유*
            </label>
            <select className={styles.selectForm} onChange={this.handleSelect}>
              <option defaultValue disabled>
                문의 이유를 선택하세요.
              </option>
              <option value={PRODUCT_FORM}>제품 문의</option>
              <option value={PARTNERSHIP_FORM}>Partnership</option>
              <option value={ETC_FORM}>기타</option>
            </select>
          </div>

          <div className={styles.info}>
            제품 사용 중 생긴 문의 사항은 현재 페이지가 아닌<br />
            <a href="mailto:support@sualab.com">support@sualab.com</a>으로 메일을 보내시길 바랍니다.
          </div>

          {restForm}

          <div className={styles.submitWrapper}>
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" name="termsAgree" id="termsAgree" />
              <label htmlFor="termsAgree">서비스 약관, 개인정보 수집 및 이용 동의 (필수)</label>
            </div>
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" name="adAgree" id="adAgree" />
              <label htmlFor="adAgree">광고성 정보수신 동의 (선택)</label>
            </div>
            <button className={styles.submitBtn}>문의 제출 하기</button>
          </div>
        </div>
      </section>
    );
  }

  handleSelect(event) {
    const value = event.target.value;
    this.setState({
      formType: value,
    });
  }
}

export default SupportPage;
