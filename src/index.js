import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { 
  Menu, 
  Container 
} from 'semantic-ui-react'

import './styles/index.css';
import ActivityGeneratorView from './ActivityGeneratorView';
import RatingView from './RatingView';
import ContactView from './ContactView';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="main-menu">
          <Container>
            <Menu fluid widths={3}>
              <Menu.Item as={NavLink} to="/" name="home">
                Home
              </Menu.Item>
              <Menu.Item as={NavLink} to="/rating" name="rating">
                Rating
              </Menu.Item>
              <Menu.Item as={NavLink} to="/contact" name="contact">
                Contact
              </Menu.Item>
            </Menu>
          </Container>
        </div>
        <div className="content">
          <Route exact path="/" component={ActivityGeneratorView}/>
          <Route exact path="/rating" component={RatingView}/>
          <Route exact path="/contact" component={ContactView}/>
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
