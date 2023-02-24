import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  handleBtnClick = (e) => {
    const { name } = e.target;
    this.setState({ [name]: this.state[name] + 1 });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage = (total) => {
    if (this.state.good === 0) {
      return 0;
    }

    return parseInt(this.state.good / total * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    const options = ['good', 'neutral', 'bad'];

    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.handleBtnClick} />
        </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
      </Section>
      <GlobalStyle />
      </>
    )
  }
}