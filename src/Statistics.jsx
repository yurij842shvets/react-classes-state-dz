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
    } = this.props;
    return (
      <>
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
