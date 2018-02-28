import React from "react";
import { injectIntl } from "react-intl";
import axios from "axios";
import qs from "qs";

import Modal from "react-modal";

import TitleSection from "../../commons/titleSection";

import styles from "./supportPage.scss";

import termsText from "./terms";

const PRODUCT_FORM = "product";
const PARTNERSHIP_FORM = "partnership";
const ETC_FORM = "etc";

const TERMS_AGREE_MODAL = 0;
const AD_AGREE_MODAL = 1;

const TermsModalBody = () => (
  <div className={styles.modalContent}>{termsText}</div>

  // <div className={styles.modalContent}>
  //   <h1>서비스 이용약관 (필수)</h1>
  //   <p>
  //     SuaKIT 관련 제품 문의를 주셔서 감사드립니다. 수아랩의 개인정보 보호정책에는 당사에서 사용자 정보를 수집 및
  //     이용하는 방법이 기술되어 있으며, 사용 제한 정책에는 본 서비스 이용에 따른 사용자의 책임이 설명되어 있습니다.
  //     사용자는 본 서비스를 사용함으로써, 본 약관,개인정보 보호정책 및 사용 제한 정책을 준수하는 데 동의합니다. 회사에
  //     소속된 사용자가 본 서비스를 사용하는 경우, 해당 회사를 대신해 본 약관에 동의하는 것으로 간주됩니다.
  //   </p>
  //   <p>
  //     <span className={styles.lead}>사용자 자료 및 사용자 권한</span>
  //     서비스 이용 시 사용자는 이미지 파일, 제품 등의 자료(이하 ＇사용자 자료＇)를 수아랩에 제공합니다. 사용자 자료는n
  //     사용자의 소유입니다. 본 약관은 당사가 서비스를 제공하기 위해 필요한 제한된 권한을 제외하고 사용자 자료에 대한
  //     어떠한 권한도 당사에 부여하지 않습니다. 수아랩에서 사용자 자료로 사용자가 요청한 작업을 처리하려면 사용자의 허가가
  //     필요합니다.
  //   </p>
  //   <p>
  //     <span className={styles.lead}>사용자의 책임</span>사용자는 본인의 행동과 사용자 자료에 대한 책임이 있으며, 당사의
  //     사용 제한 정책을 준수해야 합니다.
  //   </p>
  //   <p>
  //     <span className={styles.lead}>서비스의 중단</span>
  //     당사는 당사의 통제 범위를 벗어난 예측 불가능한 상황에 대처하거나 법적 요건을 준수하기 위해 서비스를 중단하기로
  //     결정할 수 있습니다. 이 경우 당사는 해당 사용자에게 합리적인 기간 이전에 통지를 하여 당사 시스템에서 사용자 자료를
  //     내보낼 수 있도록 합니다.
  //   </p>
  //   <p>
  //     <span className={styles.lead}>분쟁 해결</span>
  //     수아랩은 사용자와 분쟁이 발생하는 경우 먼저 공식적 법적 절차 없이 원만하게 분쟁을 해결하고 싶습니다. 사용자는
  //     수아랩을 상대로 분쟁을 제기하기 전에 <a href="mailto:support@sualab.com">support@sualab.com</a>에 문의하여
  //     비공식적으로 분쟁을 해결하기 위해 노력할 것에 동의합니다. 당사는 사용자와 이메일을 통해 비공식적으로 분쟁을
  //     해결하기 위해 노력합니다. 이메일을 제출한 후 15일 이내에 분쟁이 해결되지 않은 경우 사용자 또는 당사는 공식적
  //     절차를 밟을 수 있습니다.
  //   </p>
  // </div>
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

      name: "",
      phone: "",
      company: "",
      status: "",
      email: "",
      country: "",
      reason: PRODUCT_FORM,
      hasVision: -1,
      industry: "",
      productType: "",
      faultType: "",
      numOfLine: "",
      path: -1,
      content: "",
      adAgree: false,

      termsAgree: false,

      canSubmit: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
    this.submitInquiry = this.submitInquiry.bind(this);
  }
  componentDidUpdate() {
    this.validateSubmit();
  }
  render() {
    const { intl } = this.props;
    const { formType, showModal, modalContentType, canSubmit } = this.state;
    return (
      <section className={styles.supportPage}>
        <TitleSection
          subTitle="COUSTOMER SUPPORT"
          title={intl.formatMessage({ id: "SUPPORT.title" })}
          bgImage="https://d2ivzy5c3eic08.cloudfront.net/productPage/support-background%402x.jpg"
        />

        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.subTitle}>{intl.formatMessage({ id: "SUPPORT.subTitle" })}</div>

          <div className={styles.formWrapper}>
            <div className={styles.inputWrapper}>
              <label htmlFor="name" className={styles.label}>
                {intl.formatMessage({ id: "SUPPORT.name" })}*
              </label>
              <input
                type="text"
                className={styles.textForm}
                id="name"
                onChange={ev => this.handleChange(ev, "name")}
                value={this.state.name}
                name="name"
              />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="phone" className={styles.label}>
                {intl.formatMessage({ id: "SUPPORT.phone" })}*
              </label>
              <input
                type="text"
                className={styles.textForm}
                id="phone"
                onChange={ev => this.handleChange(ev, "phone")}
                value={this.state.phone}
                name="phone"
              />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="company" className={styles.label}>
                {intl.formatMessage({ id: "SUPPORT.company" })}*
              </label>
              <input
                type="text"
                className={styles.textForm}
                id="company"
                onChange={ev => this.handleChange(ev, "company")}
                value={this.state.company}
                name="company"
              />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="status" className={styles.label}>
                {intl.formatMessage({ id: "SUPPORT.status" })}
              </label>
              <input
                type="text"
                className={styles.textForm}
                id="status"
                onChange={ev => this.handleChange(ev, "status")}
                value={this.state.status}
                name="status"
              />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="email" className={styles.label}>
                {intl.formatMessage({ id: "SUPPORT.email" })}*
              </label>
              <input
                type="email"
                className={styles.textForm}
                id="email"
                onChange={ev => this.handleChange(ev, "email")}
                value={this.state.email}
                name="email"
              />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="country" className={styles.label}>
                {intl.formatMessage({ id: "SUPPORT.country" })}
              </label>
              <input
                type="text"
                className={styles.textForm}
                id="country"
                onChange={ev => this.handleChange(ev, "country")}
                value={this.state.country}
                name="country"
              />
            </div>
          </div>
          <div className={`${styles.selectWrapper} ${styles.reasonSelect}`}>
            <label htmlFor="reason" className={styles.label}>
              {intl.formatMessage({ id: "SUPPORT.reason" })}*
            </label>
            <select
              id="reason"
              name="reason"
              onChange={ev => {
                this.handleChange(ev, "reason");
                this.handleSelect(ev);
              }}
              value={this.state.reason}
              className={styles.selectForm}
            >
              <option defaultValue disabled>
                {intl.formatMessage({ id: "SUPPORT.reason.item_0" })}
              </option>
              <option value={PRODUCT_FORM}>{intl.formatMessage({ id: "SUPPORT.reason.item_1" })}</option>
              <option value={PARTNERSHIP_FORM}>{intl.formatMessage({ id: "SUPPORT.reason.item_2" })}</option>
              <option value={ETC_FORM}>{intl.formatMessage({ id: "SUPPORT.reason.item_3" })}</option>
            </select>
          </div>

          <div
            className={styles.info}
            dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "SUPPORT.info" }) }}
          />
          <div className={styles.productForm}>
            {formType === PRODUCT_FORM ? (
              <div>
                <div className={styles.inputWrapper}>
                  <label className={styles.label}>{intl.formatMessage({ id: "SUPPORT.vision" })}*</label>

                  <input
                    className={styles.radioBtn}
                    type="radio"
                    onChange={ev => this.handleChange(ev, "hasVision")}
                    value={1}
                    name="hasVision"
                    id="visionYes"
                  />
                  <label htmlFor="visionYes">{intl.formatMessage({ id: "SUPPORT.vision.yes" })}</label>
                  <input
                    className={styles.radioBtn}
                    type="radio"
                    onChange={ev => this.handleChange(ev, "hasVision")}
                    value={0}
                    name="hasVision"
                    id="visionNo"
                  />
                  <label htmlFor="visionNo">{intl.formatMessage({ id: "SUPPORT.vision.no" })}</label>
                  <input
                    className={styles.radioBtn}
                    type="radio"
                    onChange={ev => this.handleChange(ev, "hasVision")}
                    value={2}
                    name="hasVision"
                    id="visionDontKnow"
                  />
                  <label htmlFor="visionDontKnow">{intl.formatMessage({ id: "SUPPORT.vision.dontknow" })}</label>
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="industry" className={styles.label}>
                    {intl.formatMessage({ id: "SUPPORT.industry" })}*
                  </label>
                  <input
                    type="text"
                    className={styles.textForm}
                    id="industry"
                    onChange={ev => this.handleChange(ev, "industry")}
                    value={this.state.industry}
                    name="industry"
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="productType" className={styles.label}>
                    {intl.formatMessage({ id: "SUPPORT.productType" })}
                  </label>
                  <input
                    type="text"
                    className={styles.textForm}
                    id="productType"
                    onChange={ev => this.handleChange(ev, "productType")}
                    value={this.state.productType}
                    name="productType"
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="faultType" className={styles.label}>
                    {intl.formatMessage({ id: "SUPPORT.faultType" })}
                  </label>
                  <input
                    type="text"
                    className={styles.textForm}
                    id="faultType"
                    onChange={ev => this.handleChange(ev, "faultType")}
                    value={this.state.faultType}
                    name="faultType"
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="numOfLine" className={styles.label}>
                    {intl.formatMessage({ id: "SUPPORT.numOfLine" })}
                  </label>
                  <input
                    type="text"
                    className={styles.textForm}
                    id="numOfLine"
                    onChange={ev => this.handleChange(ev, "numOfLine")}
                    value={this.state.numOfLine}
                    name="numOfLine"
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            {formType !== ETC_FORM ? (
              <div className={styles.selectWrapper}>
                <label htmlFor="path" className={styles.label}>
                  {intl.formatMessage({ id: "SUPPORT.path" })}*
                </label>
                <select
                  id="path"
                  value="path"
                  onChange={ev => this.handleChange(ev, "path")}
                  value={this.state.path}
                  className={styles.selectForm}
                >
                  <option defaultValue disabled>
                    {intl.formatMessage({ id: "SUPPORT.path.item_info" })}
                  </option>
                  <option value="0">{intl.formatMessage({ id: "SUPPORT.path.item_0" })}</option>
                  <option value="1">{intl.formatMessage({ id: "SUPPORT.path.item_1" })}</option>
                  <option value="2">{intl.formatMessage({ id: "SUPPORT.path.item_2" })})</option>
                  <option value="3">{intl.formatMessage({ id: "SUPPORT.path.item_3" })}</option>
                  <option value="4">{intl.formatMessage({ id: "SUPPORT.path.item_4" })}</option>
                </select>
              </div>
            ) : (
              ""
            )}

            <div className={styles.textWrapper}>
              <label htmlFor="content" className={styles.label}>
                {intl.formatMessage({ id: "SUPPORT.supportContent" })}*
              </label>
              <textarea
                onChange={ev => this.handleChange(ev, "content")}
                value={this.state.content}
                name="content"
                id="content"
              />
            </div>
          </div>

          <div className={styles.submitWrapper}>
            <div className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                onChange={ev => this.handleChange(ev, "termsAgree")}
                name="termsAgree"
                id="termsAgree"
              />
              <label htmlFor="termsAgree">
                {intl.formatMessage({ id: "SUPPORT.termsAgree" })}
                <span className={styles.modalBtn} onClick={() => this.handleOpenModal(TERMS_AGREE_MODAL)}>
                  {intl.formatMessage({ id: "SUPPORT.modalBtn" })}
                </span>
              </label>
            </div>
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" onChange={ev => this.handleChange(ev, "adAgree")} name="adAgree" id="adAgree" />
              <label htmlFor="adAgree">
                {intl.formatMessage({ id: "SUPPORT.adAgree" })}
                <span className={styles.modalBtn} onClick={() => this.handleOpenModal(AD_AGREE_MODAL)}>
                  {intl.formatMessage({ id: "SUPPORT.modalBtn" })}
                </span>
              </label>
            </div>
            <button
              disabled={!canSubmit}
              onClick={this.submitInquiry}
              className={`${styles.submitBtn} ${canSubmit ? styles.active : ""}`}
            >
              {intl.formatMessage({ id: "SUPPORT.submitBtn" })}
            </button>
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
            {intl.formatMessage({ id: "SUPPORT.modal.ok" })}
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

  handleChange(ev, type) {
    const value = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    this.setState({
      [type]: value,
    });
  }

  validateSubmit() {
    const { name, phone, company, email, reason, hasVision, industry, content, path, termsAgree } = this.state;
    const canSubmit =
      name !== "" &&
      phone !== "" &&
      company !== "" &&
      email !== "" &&
      reason !== "" &&
      (reason !== PRODUCT_FORM || hasVision !== -1) &&
      (reason !== PRODUCT_FORM || industry !== "") &&
      (reason === ETC_FORM || path !== "") &&
      content !== "" &&
      termsAgree === true;
    this.setState({
      canSubmit: canSubmit,
    });
  }

  submitInquiry(ev) {
    ev.preventDefault();

    const { intl } = this.props;
    const { canSubmit } = this.state;
    if (!canSubmit) {
      return;
    }

    const data = {};
    data["name"] = this.state.name;
    data["phone"] = this.state.phone;
    data["company"] = this.state.company;
    data["status"] = this.state.status;
    data["email"] = this.state.email;
    data["country"] = this.state.country;
    data["reason"] = this.state.reason;
    data["hasVision"] = this.state.hasVision;
    data["industry"] = this.state.industry;
    data["productType"] = this.state.productType;
    data["faultType"] = this.state.faultType;
    data["numOfLine"] = this.state.numOfLine;
    data["path"] = this.state.path;
    data["content"] = this.state.content;
    data["adAgree"] = this.state.adAgree;

    axios.post("/api/inquiry", data).then(res => {
      if (res.status === 204) {
        alert(intl.formatMessage({ id: "SUPPORT.alert.success" }));
        window.location.reload();
      } else {
        alert(intl.formatMessage({ id: "SUPPORT.alert.error" }));
      }
    });
  }
}
export default injectIntl(SupportPage);
