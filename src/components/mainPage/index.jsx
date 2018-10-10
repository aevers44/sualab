import React from "react";
import { injectIntl } from "react-intl";

import FirstContainer from "./firstContainer";
import SecondContainer from "./secondContainer";
import ThirdContainer from "./thirdContainer";
import FourthContainer from "./fourthContainer";
import FifthContainer from "./fifthContainer";

import Popup from "../popup/popup";


const dummyPopup = [
  {
    id: 1,
    image: "http://www.freedigitalphotos.net/blog/wp-content/uploads/2013/11/archie.jpg",
    width: 300,
    height: 400,
    url: "http://www.naver.com"
  },
  {
    id: 2,
    image: "http://www.freedigitalphotos.net/blog/wp-content/uploads/2013/11/archie.jpg",
    width: 600,
    height: 200,
    url: "http://www.naver.com"
  }
]
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

  getPopup(){
    this.setState({
      popups: dummyPopup
    })
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
}

export default injectIntl(MainPage);
