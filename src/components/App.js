import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import MainPage from './mainPage';
import Test from './test';

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

                    <Route exact path="/" component={MainPage} />
                    <Route path="/test" component={Test} />
                    
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
