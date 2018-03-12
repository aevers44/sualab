import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import MainPage from "./mainPage";
import { AboutUsPage, PeoplePage } from "./companyPage";
import { SuakitPage, SupportPage, HowToPage, DownloadPage } from "./productPage";
import { MediaPage, NewsDetail, EventPage, EventDetail } from "./newsPage";
import { RecruitPage, PhilosophyPage } from "./careerPage";
import { OfficePage, NetworkPage } from "./contactPage";

import Header from "./commons/header";
import Footer from "./commons/footer";

import "./normalize.scss";
import "./root.scss";

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={MainPage} />

            <Route exact path="/company/about-us" component={AboutUsPage} />
            <Route exact path="/company/people" component={PeoplePage} />
            <Redirect from="/company" to="/company/about-us" />

            <Route exact path="/product/suakit" component={SuakitPage} />
            <Route exact path="/product/how-to-apply" component={HowToPage} />
            <Route exact path="/product/support" component={SupportPage} />
            <Route exact path="/product/download" component={DownloadPage} />
            <Redirect from="/product" to="/product/suakit" />

            <Route exact path="/news/media" component={MediaPage} />
            <Route exact path="/news/media/:number" component={NewsDetail} />
            <Route exact path="/news/event" component={EventPage} />
            <Route exact path="/news/event/:number" component={EventDetail} />
            <Redirect from="/news" to="/news/media" />

            <Route exact path="/career/philosophy" component={PhilosophyPage} />
            <Route exact path="/career/recruit" component={RecruitPage} />
            <Redirect from="/career" to="/career/philosophy" />

            <Route exact path="/contact/office" component={OfficePage} />
            <Route exact path="/contact/global-sales-network" component={NetworkPage} />
            <Redirect from="/contact" to="/contact/office" />

            <Redirect from="*" to="/" />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
