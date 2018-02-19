import React from "react";
import Modal from "react-modal";

import TitleSection from "../../commons/titleSection";
import ProductForm from "./productForm";
import PartnershipForm from "./partnershipForm";
import EtcForm from "./etcForm";

import styles from "./supportPage.scss";

const PRODUCT_FORM = 0;
const PARTNERSHIP_FORM = 1;
const ETC_FORM = 2;

const TERMS_AGREE_MODAL = 0;
const AD_AGREE_MODAL = 1;

const TermsModalBody = () => (
  <div className={styles.modalContent}>
    <h1>서비스 이용약관 (필수)</h1>
    <p>
      SuaKIT 관련 제품 문의를 주셔서 감사드립니다. 수아랩의 개인정보 보호정책에는 당사에서 사용자 정보를 수집 및
      이용하는 방법이 기술되어 있으며, 사용 제한 정책에는 본 서비스 이용에 따른 사용자의 책임이 설명되어 있습니다.
      사용자는 본 서비스를 사용함으로써, 본 약관,개인정보 보호정책 및 사용 제한 정책을 준수하는 데 동의합니다. 회사에
      소속된 사용자가 본 서비스를 사용하는 경우, 해당 회사를 대신해 본 약관에 동의하는 것으로 간주됩니다.
    </p>
    <p>
      <span className={styles.lead}>사용자 자료 및 사용자 권한</span>
      서비스 이용 시 사용자는 이미지 파일, 제품 등의 자료(이하 ＇사용자 자료＇)를 수아랩에 제공합니다. 사용자 자료는
      사용자의 소유입니다. 본 약관은 당사가 서비스를 제공하기 위해 필요한 제한된 권한을 제외하고 사용자 자료에 대한
      어떠한 권한도 당사에 부여하지 않습니다. 수아랩에서 사용자 자료로 사용자가 요청한 작업을 처리하려면 사용자의 허가가
      필요합니다.
    </p>
    <p>
      <span className={styles.lead}>사용자의 책임</span>사용자는 본인의 행동과 사용자 자료에 대한 책임이 있으며, 당사의
      사용 제한 정책을 준수해야 합니다.
    </p>
    <p>
      <span className={styles.lead}>서비스의 중단</span>
      당사는 당사의 통제 범위를 벗어난 예측 불가능한 상황에 대처하거나 법적 요건을 준수하기 위해 서비스를 중단하기로
      결정할 수 있습니다. 이 경우 당사는 해당 사용자에게 합리적인 기간 이전에 통지를 하여 당사 시스템에서 사용자 자료를
      내보낼 수 있도록 합니다.
    </p>
    <p>
      <span className={styles.lead}>분쟁 해결</span>
      수아랩은 사용자와 분쟁이 발생하는 경우 먼저 공식적 법적 절차 없이 원만하게 분쟁을 해결하고 싶습니다. 사용자는
      수아랩을 상대로 분쟁을 제기하기 전에 <a href="mailto:support@sualab.com">support@sualab.com</a>에 문의하여
      비공식적으로 분쟁을 해결하기 위해 노력할 것에 동의합니다. 당사는 사용자와 이메일을 통해 비공식적으로 분쟁을
      해결하기 위해 노력합니다. 이메일을 제출한 후 15일 이내에 분쟁이 해결되지 않은 경우 사용자 또는 당사는 공식적
      절차를 밟을 수 있습니다.
    </p>
  </div>
);

const AdModalBody = () => (
  <div className={styles.modalContent}>
    <h1>마케팅 정보수신 동의</h1>
    <p>마케팅 정보 수신에 동의하실 경우 수아랩 제품·서비스와 관련된 각종 소식 등을 받으실 수 있습니다.</p>
  </div>
);

class SupportPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      formType: PRODUCT_FORM,
      showModal: false,
      modalContentType: TERMS_AGREE_MODAL,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  render() {
    const { formType, showModal, modalContentType } = this.state;
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
              <label htmlFor="termsAgree">
                서비스 약관, 개인정보 수집 및 이용 동의 (필수)<span
                  className={styles.modalBtn}
                  onClick={() => this.handleOpenModal(TERMS_AGREE_MODAL)}
                >
                  자세히 보기
                </span>
              </label>
            </div>
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" name="adAgree" id="adAgree" />
              <label htmlFor="adAgree">
                광고성 정보수신 동의 (선택)<span
                  className={styles.modalBtn}
                  onClick={() => this.handleOpenModal(AD_AGREE_MODAL)}
                >
                  자세히 보기
                </span>
              </label>
            </div>
            <button className={styles.submitBtn}>문의 제출 하기</button>
          </div>
        </div>

        <Modal
          isOpen={showModal}
          bodyOpenClassName={styles.infoModalBody}
          className={styles.infoModal}
          overlayClassName={styles.infoModalOverlay}
          onRequestClose={this.handleCloseModal}
        >
          {modalContentType === TERMS_AGREE_MODAL ? <TermsModalBody /> : <AdModalBody />}
          <button onClick={this.handleCloseModal} className={styles.closeBtn}>
            확인
          </button>
        </Modal>
      </section>
    );
  }

  handleSelect(event) {
    const value = event.target.value;
    this.setState({
      formType: value,
    });
  }

  handleOpenModal(type) {
    this.setState({ showModal: true, modalContentType: type });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
}

export default SupportPage;
