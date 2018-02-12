import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import MainPage from "./mainPage";
import Test from "./test";
import { AboutUsPage, PeoplePage } from "./companyPage";
import { SuakitPage, SupportPage } from "./productPage";
import { MediaPage, NewsDetail } from "./newsPage";
import { RecruitPage } from "./careerPage";
import { OfficePage, NetworkPage } from "./contactPage";

import Header from "./commons/header";
import Footer from "./commons/footer";

import "./normalize.scss";
import "./root.scss";

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={MainPage} />

            <Route exact path="/company/about-us" component={AboutUsPage} />
            <Route exact path="/company/people" component={PeoplePage} />
            <Redirect from="/company" to="/company/about-us" />

            <Route exact path="/product/suakit" component={SuakitPage} />
            <Route exact path="/product/support" component={SupportPage} />
            <Redirect from="/product" to="/product/suakit" />

            <Route exact path="/news/media" component={MediaPage} />
            <Route exact path="/news/media/:number" component={NewsDetail} />
            <Redirect from="/news" to="/news/media" />

            <Route exact path="/career/recruit" component={RecruitPage} />
            <Redirect from="/career" to="/career/recruit" />

            <Route exact path="/contact/office" component={OfficePage} />
            <Route exact path="/contact/global-sales-network" component={NetworkPage} />
            <Redirect from="/contact" to="/contact/office" />

            <Route path="/test" component={Test} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
