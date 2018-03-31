import React from "react";
import axios from "axios";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import NetworkMapComponent from "./googleMap";

import styles from "./networkPage.scss";

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

class NetworkPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      officeList: [],
      asiaOfficeList: [],
      americaOfficeList: [],
      europeOfficeList: [],
      africaOfficeList: [],
      oceaniaOfficeList: [],
      latlngList: [],
    };

    this.getOfficeList = this.getOfficeList.bind(this);
  }

  componentDidMount() {
    this.getOfficeList();
  }

  render() {
    const { intl } = this.props;
    const {
      asiaOfficeList,
      americaOfficeList,
      europeOfficeList,
      africaOfficeList,
      oceaniaOfficeList,
      latlngList,
    } = this.state;

    return (
      <section className={styles.networkPage}>
        <TitleSection
          subTitle="GLOBAL SALES NETWORKS"
          title={intl.formatMessage({ id: "NETWORK.title" })}
          bgImage="https://d2ivzy5c3eic08.cloudfront.net/contactPage/media-background@2x.jpg"
        />

        <div className={styles.innerContainer}>
          <div className={styles.mapWrapper}>
            <NetworkMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC2l8AiJrv0oRBAQIKI60rgH16h93W98Ac"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `450px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              markerList={latlngList}
            />
          </div>

          <div className={styles.networkListWrapper}>
            {asiaOfficeList.length > 0 ? <div className={styles.continentLabel}>ASIA</div> : ""}
            {asiaOfficeList.map(elem => <CompanyItem key={elem.id} {...elem} />)}

            {americaOfficeList.length > 0 ? <div className={styles.continentLabel}>AMERICA</div> : ""}
            {americaOfficeList.map(elem => <CompanyItem key={elem.id} {...elem} />)}

            {europeOfficeList.length > 0 ? <div className={styles.continentLabel}>EUROPE</div> : ""}
            {europeOfficeList.map(elem => <CompanyItem key={elem.id} {...elem} />)}

            {africaOfficeList.length > 0 ? <div className={styles.continentLabel}>AFRICA</div> : ""}
            {africaOfficeList.map(elem => <CompanyItem key={elem.id} {...elem} />)}

            {oceaniaOfficeList.length > 0 ? <div className={styles.continentLabel}>OCEANIA</div> : ""}
            {oceaniaOfficeList.map(elem => <CompanyItem key={elem.id} {...elem} />)}
          </div>
        </div>
      </section>
    );
  }

  getOfficeList() {
    axios.get("/api/office").then(res => {
      const officeList = res.data;

      const latlngList = officeList.filter(elem => elem.marker_visible !== 0).map(elem => {
        return { lat: elem.latitude, lng: elem.longitude };
      });
      this.setState({
        asiaOfficeList: officeList.filter(elem => elem.continent === "ASIA"),
        americaOfficeList: officeList.filter(elem => elem.continent === "AMERICA"),
        europeOfficeList: officeList.filter(elem => elem.continent === "EUROPE"),
        africaOfficeList: officeList.filter(elem => elem.continent === "AFRICA"),
        oceaniaOfficeList: officeList.filter(elem => elem.continent === "OCEANIA"),
        latlngList: latlngList,
      });
    });
  }
}

export default injectIntl(NetworkPage);
