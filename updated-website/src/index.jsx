import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Browserouter as Router} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
)