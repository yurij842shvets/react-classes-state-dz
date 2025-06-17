import { Component } from "react";

export default class Statistics extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      good,
      neutral,
      bad,
      total,
      positiveFeedback,
      handleGoodIncrement,
      handleNeutralIncrement,
      handleBadIncrement,
    } = this.props;
    return (
      <>
        <h1>Statistics</h1>
        <div>
          <button onClick={handleGoodIncrement}>Good</button>
          <button onClick={handleNeutralIncrement}>Neutral</button>
          <button onClick={handleBadIncrement}>Bad</button>
        </div>

        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>PositiveFeedback: {positiveFeedback}%</p>
        </div>
      </>
    );
  }
}
