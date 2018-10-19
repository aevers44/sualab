import React from "react";
import { injectIntl } from "react-intl";
import axios from "axios";

import FirstContainer from "./firstContainer";
import SecondContainer from "./secondContainer";
import ThirdContainer from "./thirdContainer";
import FourthContainer from "./fourthContainer";
import FifthContainer from "./fifthContainer";

import Popup from "../popup/popup";

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      popups: []
    }
  }
  
  componentWillMount() {
    this.getPopup();
  }

  renderPopup() {
    return this.state.popups.map((popup,idx) => 
    <Popup key={idx} popupId={popup.id} image={popup.image} width={popup.width} height={popup.height} url={popup.url}/>)
  }

  render () {
    const {intl} = this.props;
    return (
      <div>
        {
          this.renderPopup()
        }
        <FirstContainer intl={intl} />
        <SecondContainer intl={intl} />
        <ThirdContainer intl={intl} />
        <FourthContainer intl={intl} />
        <FifthContainer intl={intl} />
      </div>
    )
  }

  getPopup() {
    const { locale } = this.props.intl;
    axios.get(`/api/popup/${locale}`).then(res => {
      this.setState({
        popups: res.data.map(popup => popup)
      });
    });
  }
}

export default injectIntl(MainPage);
