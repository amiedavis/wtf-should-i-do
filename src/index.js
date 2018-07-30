import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import activities from './activities.json';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'We have a weiner! Winner is: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}

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

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <ActivityGenerator />,
  document.getElementById('root')
);
