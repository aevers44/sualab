import React from 'react';
import Test from './test/index.jsx';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Hello ssReactd</h1>
                <Test />
            </div>
        );
    }
}

export default App;
