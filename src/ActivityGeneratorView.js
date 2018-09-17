import React from 'react';
import { Button } from 'semantic-ui-react'
import PreRatingComponent from "./PreRatingComponent.js";

import activities from './activities.json';

class ActivityGeneratorView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activityNumber: Math.floor(Math.random()*activities.length),
        displayPreRating: false
      };
      this.setActivityNumber = this.setActivityNumber.bind(this);
      this.setPreRatingDisplay = this.setPreRatingDisplay.bind(this);
    }
  
    render() {
      let preRatingSection;
      if (this.state.displayPreRating) {
        preRatingSection = <PreRatingComponent />;
      }

      return (
        <div className="activity-generator-view-container">
          <div className="activity-generator-view-heading">
            <h1>WTF Should I Do?</h1>
          </div>
          <div className="activity-container">
          <Activity value={this.state.activityNumber}/>
          </div>
          <div className="button-container">
            <Button positive onClick={() => this.setPreRatingDisplay(true)}>
              Ok, I'll give it a go
            </Button>
            <Button negative onClick={this.setActivityNumber}>
              Give me another suggestion
            </Button>
          </div>
          <div className="pre-rating-container">
            {preRatingSection}
          </div>
        </div>
      );
    }
  
    setActivityNumber() {
      let randomNumber = Math.floor(Math.random()*activities.length);
      randomNumber = (randomNumber === this.state.activityNumber) ? randomNumber + 1 : randomNumber;
      
      this.setState({
        activityNumber: randomNumber
      });
      
      this.setPreRatingDisplay(false);
    }

    setPreRatingDisplay(display) {
      this.setState({
        displayPreRating: display
      });
    }
  }
  
  function Activity(props){
    return(
      <div className="activity">
        {activities[props.value].activity}
      </div>
    );
  }

  export default ActivityGeneratorView;