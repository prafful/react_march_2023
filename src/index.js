import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Root from './rootcomponent/root';

ReactDOM.render(
    <HashRouter>
        <Root></Root>
    </HashRouter>,
    document.getElementById('mylocation'))