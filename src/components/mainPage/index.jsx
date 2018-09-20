import React from "react";
import { injectIntl } from "react-intl";

import FirstContainer from "./firstContainer";
import SecondContainer from "./secondContainer";
import ThirdContainer from "./thirdContainer";
import FourthContainer from "./fourthContainer";
import FifthContainer from "./fifthContainer";

const MainPage = ({ intl }) => (
  <div>
    <FirstContainer intl={intl} />
    <SecondContainer intl={intl} />
    <ThirdContainer intl={intl} />
    <FourthContainer intl={intl} />
    <FifthContainer intl={intl} />
  </div>
);

export default injectIntl(MainPage);
