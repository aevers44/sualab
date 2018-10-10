import React from "react";
import { injectIntl } from "react-intl";
import axios from 'axios';

import TitleSection from "../../commons/titleSection";

import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";
import FourthSection from "./fourthSection";
import FifthSection from "./fifthSection";
import SixthSection from "./sixthSection";

import styles from "./suakitPage.scss";

/*
  각 섹션 설명
  FirstSection: SuaKIT학습 방법론, SuaKIT 주요기능
  SecondSection: 적용 사례
  ThirdSection: 기존 머신비전 검사 vs SuaKIT
  FourthSection: Benefits
  FifthSection: FAQ
  SixthSection: SuaKIT 브로셔
 */

class SuakitPage extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      productExample: []
    }
  }

  componentDidMount(){
    this.getProductExample();
  }

  render() {
    const { intl } = this.props;
    const {productExample} = this.state;
    return (
      <section className={styles.suakitPage}>
      <TitleSection
        subTitle="SUAKIT"
        title={intl.formatMessage({ id: "SUAKIT.title" })}
        bgImage="https://d2ivzy5c3eic08.cloudfront.net/productPage/background%402x.jpg"
      />

      <FirstSection intl={intl} />
      <SecondSection intl={intl} example={productExample}/>
      <ThirdSection intl={intl} />
      <FourthSection intl={intl} />
      <FifthSection intl={intl} />
      <SixthSection intl={intl} />
      </section>
    );
  }

  getProductExample(){
    axios.get('/api/product/example').then(res => {
      this.setState({
        productExample: res.data
      });
    })
  }
}

export default injectIntl(SuakitPage);
