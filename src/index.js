import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import ActivityGeneratorView from './ActivityGeneratorView';

class Main extends React.Component {
  render() {
    return (
      <div>
        <ActivityGeneratorView/>
      </div>
      /* Leave this out for first cut
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
        </div> */
    );
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
