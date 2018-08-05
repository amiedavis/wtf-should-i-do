import React from 'react';
import activities from './activities.json';

class ActivityGeneratorView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activityNumber: Math.floor(Math.random()*activities.length)
      };
  
      this.setActivityNumber = this.setActivityNumber.bind(this);
    }
  
    render() {
      return (
        <div>
          <div className="activity-container">
          <Activity value={this.state.activityNumber}/>
          </div>
          <div className="button-container">
            <button className="accept-button">
              Ok, I'll give it a go
            </button>
            <button className="reject-button" onClick={this.setActivityNumber}>
              Give me another suggestion
            </button>
  
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