import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import activities from './activities.json';

class ActivityGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityNumber: Math.floor(Math.random()*activities.length)
    };
  }

  render() {
    return (
      <div>
        <div className="main-page-heading">
          WTF Should I do?
        </div>
        <div className="activity-container">
          {this.renderActivity()}
        </div>
        <div className="button-container">
          <button className="accept-button">
            Ok, I'll give it a go
          </button>
          <button className="reject-button" onClick={() => this.setActivityNumber()}>
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

  renderActivity() {
    return (
      <Activity
        value={this.state.activityNumber}
      />
    )
  }
}

function Activity(props){
  return(
    <div className="activity">
      {props.value != null ? activities[props.value].activity : ""}
    </div>
  );
}

// ========================================

ReactDOM.render(
  <ActivityGenerator />,
  document.getElementById('root')
);
