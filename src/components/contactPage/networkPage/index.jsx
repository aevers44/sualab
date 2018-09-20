import React from "react";
import axios from "axios";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import NetworkMapComponent from "./googleMap";

import styles from "./networkPage.scss";

const CompanyItem = ({name, ci, companies, type, link}) => {
  return (
    <div className={styles.companyWrapper}>
      <div className={styles.ciWrapper}>
        <div className={styles.companyType}>
          <span>{type}</span>
        </div>
        <div>
        {
          ci ? <img src={ci}/> 
          : <img src={`https://fakeimg.pl/180x180/?text=${name}`}/>
        }
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.company}>
          <div><strong>{name}</strong></div>
          <div>
            <span className={styles.companyLink}>{link}</span>
            <a href={`http://${link}`} target="_blank"><img src={`https://fakeimg.pl/20x20/?text=link`}/></a>
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
                        <div><img src={`https://fakeimg.pl/20x20/?text=${country}`}/></div>
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
                  <div className={styles.content}>{company.email}</div>
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


const AREA = [
  {name:"Asia Pacific", value:"ASIA"},
  {name:"Europe", value:"EUROPE"},
  {name:"Americas", value:"AMERICA"},
  {name:"Africa", value:"AFRICA"}
];

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
      selectedArea: 'ASIA'
    };

    this.getOfficeList = this.getOfficeList.bind(this);
  }

  componentDidMount() {
    this.getOfficeList();
  }

  render() {
    const { intl } = this.props;
    const {
      selectedArea,
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

          <div className={styles.areaSelection}>
            {
              AREA.map(ar => <div 
                className={`${styles.area}  ${selectedArea == ar.value ? styles.selected: ''}`}                
                key={ar.value} 
                value={ar.value}
                onClick={() =>this.onSelectArea(ar.value)}>
                  {ar.name}
                </div>)
            }
          </div>
          <div>
            { this.displayCompanies() }
          </div>
        </div>
      </section>
    );
  }

  displayCompanies() {
    const {
      selectedArea,
      asiaOfficeList,
      americaOfficeList,
      europeOfficeList,
      africaOfficeList,
      oceaniaOfficeList
    } = this.state;

    switch (selectedArea) {
      case "ASIA":
        return (
          <div>
            <div>
              <img src={`https://fakeimg.pl/800x400/?text=${selectedArea}`}/>
            </div>
            {
              Object.keys(asiaOfficeList).length > 0 ? (
                Object.keys(asiaOfficeList).map((key,idx) => (
                  <CompanyItem key={idx} {...asiaOfficeList[key]} />
                ))
              ) : (
                ""
              )
            }
          </div>
        )
        break;
      
      case "AMERICA":
        return (
          <div>
            <div>
              <img src={`https://fakeimg.pl/800x400/?text=${selectedArea}`}/>
            </div>
            {
              Object.keys(americaOfficeList).length > 0 ? (
                Object.keys(americaOfficeList).map((key,idx) => (
                  <CompanyItem key={idx} {...americaOfficeList[key]} />
                ))
              ) : (
                ""
              )
            }
          </div>
        )
        break;
      
      case "EUROPE":
        return (
          <div>
            <div>
              <img src={`https://fakeimg.pl/800x400/?text=${selectedArea}`}/>
            </div>
            {
              Object.keys(europeOfficeList).length > 0 ? (
                Object.keys(europeOfficeList).map((key,idx) => (
                  <CompanyItem key={idx} {...europeOfficeList[key]} />
                ))
              ) : (
                ""
              )
            }
          </div>
        )
        break;
      
      case "AFRICA":
        return (
          <div>
            <div>
              <img src={`https://fakeimg.pl/800x400/?text=${selectedArea}`}/>
            </div>
            {
              Object.keys(africaOfficeList).length > 0 ? (
                Object.keys(africaOfficeList).map((key,idx) => (
                  <CompanyItem key={idx} {...africaOfficeList[key]} />
                ))
              ) : (
                ""
              )
            }
          </div>
        )
        break;
      
      case "OCEANIA":
        return (
          <div>
            <div>
              <img src={`https://fakeimg.pl/800x400/?text=${selectedArea}`}/>
            </div>
            {
              Object.keys(oceaniaOfficeList).length > 0 ? (
                Object.keys(oceaniaOfficeList).map((key,idx) => (
                  <CompanyItem key={idx} {...oceaniaOfficeList[key]} />
                ))
              ) : (
                ""
              )
            }
          </div>
        )
        break;
    
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
    console.log(map);
    return map;
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

  

}

export default injectIntl(NetworkPage);
