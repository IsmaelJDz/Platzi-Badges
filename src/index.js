import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

//import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
//import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

//const element = <h1>Hello, Platzi Badges</h1>;
ReactDOM.render(<BadgeNew />, container);
