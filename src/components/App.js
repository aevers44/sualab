import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import MainPage from './mainPage';
import Test from './test';
import { AboutUsPage, PeoplePage } from './companyPage';
import { MediaPage } from './newsPage';

import Header from './commons/header';
import Footer from './commons/footer';

import './normalize.scss';
import './root.scss';

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

                        <Route exact path="/news/media" component={MediaPage} />
                        <Redirect from="/news" to="/news/media" />

                        <Route path="/test" component={Test} />
                    </Switch>

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
