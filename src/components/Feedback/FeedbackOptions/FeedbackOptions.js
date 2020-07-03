import React from 'react';

import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <>
            <button
                key="good"
                name="good"
                className={s.btn}
                onClick={onLeaveFeedback}
            >
                Good
            </button>

            <button
                key="netural"
                name="netural"
                className={s.btn}
                onClick={onLeaveFeedback}
            >
                Netural
            </button>

            <button
                key="bad"
                name="bad"
                className={s.btn}
                onClick={onLeaveFeedback}
            >
                Bad
            </button>
        </>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
