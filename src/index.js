import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import './styles/index.css';
import ActivityGeneratorView from './ActivityGeneratorView';
import RatingView from './RatingView';
import ContactView from './ContactView';

class Main extends React.Component {
  render() {
    return (
        <div>
          <h1>WTF Should I Do?</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/rating">Rating</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={ActivityGeneratorView}/>
            <Route path="/rating" component={RatingView}/>
            <Route path="/contact" component={ContactView}/>
          </div>
        </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <HashRouter>
  <Main />
  </HashRouter>,
  document.getElementById('root')
);
