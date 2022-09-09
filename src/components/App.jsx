import { Component } from 'react';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
      <section title="Please leave feedback">
          <FeedbackOptions
          options = {this.state}
          // onLeaveFeedback={this.handleChange}
        />
        </section>
        
        <section title="Statistics">
          <Statistics/>
        </section>
</>
    );
  };
};