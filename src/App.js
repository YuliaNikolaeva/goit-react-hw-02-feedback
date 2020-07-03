import React, { Component } from 'react';

import s from './App.module.css';

import Statistics from './components/Feedback/Statistics';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Section from './components/Feedback/Section';
import Notification from './components/Feedback/Notification';

export default class App extends Component {
    state = {
        good: 0,
        netural: 0,
        bad: 0,
    };

    plusVote = e => {
        const btnName = e.currentTarget.name;
        this.setState(prevState => ({
            [btnName]: prevState[btnName] + 1,
        }));
    };

    countTotalFeedback = () => {
        const vote = Object.values(this.state);
        return vote.reduce((acc, item) => acc + item, 0);
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good * 100) / this.countTotalFeedback());
    };

    render() {
        return (
            <div className={s.page__wrapper}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.plusVote}
                    />
                </Section>

                {this.countTotalFeedback() === 0 ? (
                    <Notification message={'No feedback given'} />
                ) : (
                    <Section title="Statistics">
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            options={this.state}
                            total={this.countTotalFeedback}
                            positivePercentage={
                                this.countPositiveFeedbackPercentage
                            }
                        />
                    </Section>
                )}
            </div>
        );
    }
}
