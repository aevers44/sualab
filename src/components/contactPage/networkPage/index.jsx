import React from "react";
import axios from "axios";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import Icon from 'react-icons-kit';
import {arrow_down, arrow_up} from 'react-icons-kit/ikons';
import {externalLink} from 'react-icons-kit/fa/externalLink'


import styles from "./networkPage.scss";

const CompanyItem = ({name, ci, companies, type, link, flags}) => {
  const findFlags = (name) => {
    const f = flags.filter(flag => flag.name === name);
    return f.length === 0 ? "" : f[0].image;
  }

  return (
    <div className={styles.companyWrapper}>
      <div className={styles.ciWrapper}>
        <div className={styles.companyType}>
          <span>{type}</span>
        </div>
        <div className={styles.campanyLogo}>
        {
          ci ? <img src={ci} /> 
          : <img src={`https://fakeimg.pl/180x180/?text=${name}`}/>
        }
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.company}>
          <div><strong>{name}</strong></div>
          <div>
            <a href={`http://${link}`} target="_blank">
              <span className={styles.companyLink}>{link}</span>
              <Icon icon={externalLink}/>
            </a>
          </div>
        </div>
        {
          companies.map((company,idx) => {
            const countries = company.country.split(',');
            return (
              <div key={idx} className={styles.companyLine}>
                <div className={styles.countryWrapper}>
                {
                  countries.map(country => {
                    return (
                      <div key={country} className={styles.countries}>
                        <div><img src={findFlags(country.trim())} style={{width:"26px", height:"26px"}}/></div>
                        <div>{country}</div>
                      </div>
                    )
                  })
                }
                </div>
                <div className={styles.infoLine}>
                  <div className={styles.label}>Phone</div>
                  <div className={styles.content}>{company.phone}</div>
                </div>
                <div className={styles.infoLine}>
                  <div className={styles.label}>Email</div>
                  <div className={styles.content}>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
                <div className={styles.infoLine}>
                  <div className={styles.label}>Address</div>
                  <div className={styles.content}>{company.address}</div>
                </div>
              </div>    
            )
          })
        }
      </div>
    </div>
  )
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
      selectedArea: null,
      selectionMenuOpen: false,
      area: [],
      flags: [],
      isLoaded: false
    };

    this.getOfficeList = this.getOfficeList.bind(this);
    this.getArea = this.getArea.bind(this);
    this.getFlags = this.getFlags.bind(this);
  }

  componentDidMount() {
    this.getArea();
    this.getFlags();
    this.getOfficeList();
  }

  render() {
    const { intl } = this.props;
    const { selectedArea, selectionMenuOpen, area, flags, isLoaded } = this.state;

    return (
      <section className={styles.networkPage}>
        <TitleSection
          subTitle="GLOBAL SALES NETWORKS"
          title={intl.formatMessage({ id: "NETWORK.title" })}
          bgImage="https://d2ivzy5c3eic08.cloudfront.net/contactPage/media-background@2x.jpg"
        />

        {
          isLoaded ? (
            <div className={styles.innerContainer}>
              <div className={styles.areaSelection}>
                {
                  area.map(ar => <div 
                    className={`${styles.area}  ${selectedArea.value == ar.value ? styles.selected: ''}`} 
                    key={ar.value} 
                    value={ar.value}
                    onClick={() =>this.onSelectArea(ar)}>
                      {ar.name}
                    </div>)
                }
              </div>
              <div className={styles.areaSelectionForMobile} 
              onClick={ev => this.setState({ selectionMenuOpen: !selectionMenuOpen })}>
                <div className={styles.selectedWrapper}>
                  <div>{intl.formatMessage({ id: "NETWORK.location" })}</div> 
                  <div>{selectedArea.name}</div>
                  <div>
                    {selectionMenuOpen? <Icon icon={arrow_up}/> : <Icon icon={arrow_down}/>}
                  </div>
                </div>
                <div className={`${styles.selection} ${!selectionMenuOpen ? styles.hidden: ''}`}>
                  <ul>
                  {
                    area.map(ar => <li
                      key={ar.value}
                      onClick={() => this.onSelectArea(ar)}
                      className={`${selectedArea.value == ar.value ? styles.selected: ''}`}
                      >
                      {ar.name}
                    </li>)
                  }
                  </ul>
                </div>
              </div>
              <div className={styles.companyArea}>
                { this.displayCompanies() }
              </div>
            </div>
          )
          : null
        }
        
      </section>
    );
  }

  displayCompanies() {
    const {selectedArea, flags} = this.state;
    const officeList = this.getOffice(selectedArea.value);

    return (
      <div>
        <div className={styles.mapArea}>
          <img src={selectedArea.image}/>
        </div>
        {
          Object.keys(officeList).length > 0 ? (
            Object.keys(officeList).map((key,idx) => (
              <CompanyItem key={idx} {...officeList[key]} flags={flags}/>
            ))
          ) : (
            ""
          )
        }
      </div>
    )
  }

  getOffice(area){
    const { asiaOfficeList, americaOfficeList, europeOfficeList, africaOfficeList, oceaniaOfficeList } = this.state;
    switch (area) {
      case "ASIA": return asiaOfficeList; break;
      case "AMERICA": return americaOfficeList; break;
      case "EUROPE": return europeOfficeList; break;
      case "AFRICA": return africaOfficeList; break;
      case "OCEANIA": return oceaniaOfficeList; break;
      default:
        break;
    }
  }

  onSelectArea(selectedArea) {
    this.setState({selectedArea});
  }

  groupBy(list, keyGetter){
    const map = {};
    list.forEach(item => {
      const key = keyGetter(item);
      const collection = map.hasOwnProperty(key);
      if (!collection) {
        map[key] = {
          name: item.company,
          ci: item.image,
          link: item.link,
          type: item.type,
          companies: [item]
        }
      } else {
        map[key].companies.push(item);
      }
    })
    return map;
  }

  findFlags(name) {
    const {flags} = this.state;
    flags.filter()
  }

  getOfficeList() {
    axios.get("/api/office").then(res => {
      const officeList = res.data;

      const latlngList = officeList
        .filter(elem => elem.marker_visible !== 0)
        .map(elem => {
          return { lat: elem.latitude, lng: elem.longitude };
        });
      
      this.setState({
        asiaOfficeList: this.groupBy(officeList.filter(elem => elem.continent === "ASIA"), item => item.company),
        americaOfficeList: this.groupBy(officeList.filter(elem => elem.continent === "AMERICA"), item => item.company),
        europeOfficeList: this.groupBy(officeList.filter(elem => elem.continent === "EUROPE"), item => item.company),
        africaOfficeList: this.groupBy(officeList.filter(elem => elem.continent === "AFRICA"), item => item.company),
        oceaniaOfficeList: this.groupBy(officeList.filter(elem => elem.continent === "OCEANIA"), item => item.company),
        latlngList: latlngList,
      });
    });
  }

  getArea() {
    axios.get("/api/office/area").then(res => {
      const area = res.data;

      this.setState({
        area,
        selectedArea: area[0],
        isLoaded: true
      })
    })
  }

  getFlags() {
    axios.get("/api/office/flags").then(res => {
      const flags = res.data;
      
      this.setState({
        flags
      })
    })
  }

  

}

export default injectIntl(NetworkPage);
