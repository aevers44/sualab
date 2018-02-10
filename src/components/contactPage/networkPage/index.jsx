import React from "react";

import TitleSection from "../../commons/titleSection";
import styles from "./networkPage.scss";

const asiaCompanyList = [
  {
    country: "Japan",
    company: "ADSTEC",
    address: "568-1-1, Innai-cho, Funabashi-shi, Chiba pref, 273-0025",
    phone: "+81 47 495 9070",
    email: "yuki@ads-tec.co.jp",
  },
  {
    country: "Singapore",
    company: "JM Vistec System",
    address: "9 Kaki Bukit Road 1, Eunos Technolink #03-07, Singapore 415938",
    phone: "+65 6748 5517",
    email: "info@jm-vistec.com",
  },
  {
    country: "Thailand",
    company: "JM Vistec System",
    address:
      "516 Pesik Building, 3rd Floor-Room 1, Ratchadaphisek Road, Samsen Nok Huay Kwang, Bangkok 10310, Thailand",
    phone: "+66 2 541 4316",
    email: "info@jm-vistec.com",
  },
  {
    country: "Malaysia",
    company: "JM Vistec System",
    address: "9 Kaki Bukit Road 1, Eunos Technolink #03-07, Singapore 415938",
    phone: "+65 6748 5517",
    email: "info@jm-vistec.com",
  },
];

const CompanyItem = ({ country, company, address, phone, email }) => {
  return (
    <div className={styles.companyItem}>
      <div className={styles.country}>{country}</div>

      <div className={styles.infoWrapper}>
        <div className={styles.infoLine}>
          <div className={styles.label}>Company</div>
          <div className={styles.content}>{company}</div>
        </div>
        <div className={styles.infoLine}>
          <div className={styles.label}>Address</div>
          <div className={styles.content}>{address}</div>
        </div>
        <div className={styles.infoLine}>
          <div className={styles.label}>Phone</div>
          <div className={styles.content}>{phone}</div>
        </div>
        <div className={styles.infoLine}>
          <div className={styles.label}>Email</div>
          <div className={styles.content}>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const NetworkPage = () => (
  <section className={styles.networkPage}>
    <TitleSection
      subTitle="GLOBAL SALES NETWORK"
      title="SUALAB은 *비즈니스 파트너*들과 함께 *세계*로 나아가고 있습니다"
      bgImage="https://d3rqapinkc8b8p.cloudfront.net/contactPage/media-background@2x.jpg"
    />

    <div className={styles.innerContainer}>
      <div className={styles.mapWrapper}>
        <img src="http://placehold.it/900x480" alt="" />
      </div>

      <div className={styles.networkListWrapper}>
        <div className={styles.continentLabel}>ASIA</div>
        {asiaCompanyList.map(elem => <CompanyItem {...elem} />)}
      </div>
    </div>
  </section>
);

export default NetworkPage;
