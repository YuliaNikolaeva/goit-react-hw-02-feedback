import React, { Component } from 'react';

import s from './App.module.css';

import Statistics from './components/Feedback/Statistics/Statistics';
import FeedbackOptions from './components/Feedback/FeedbackOptions/FeedbackOptions';
import Section from './components/Feedback/Section/Section';
import Notification from './components/Feedback/Notification/Notification';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    plusVote = e => {
        const btnId = e.currentTarget.id;
        this.setState(prevState => ({
            [btnId]: prevState[btnId] + 1,
        }));
    };

    countTotalFeedback = () => {
        let total = 0;
        for (const voice in this.state) {
            total = total + this.state[voice];
        }
        return total;
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
                            options={this.state.bad}
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
