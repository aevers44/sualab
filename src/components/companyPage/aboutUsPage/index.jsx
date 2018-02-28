import React from "react";
import { injectIntl } from "react-intl";

import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";
import FourthSection from "./fourthSection";

const AboutUsPage = ({ intl }) => (
  <div>
    <FirstSection intl={intl} />
    <SecondSection intl={intl} />
    <ThirdSection intl={intl} />
    <FourthSection intl={intl} />
  </div>
);

export default injectIntl(AboutUsPage);
