import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import MainPage from './mainPage';
import Test from './test';

import './normalize.scss';
import './root.scss';

class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/test" component={Test} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
