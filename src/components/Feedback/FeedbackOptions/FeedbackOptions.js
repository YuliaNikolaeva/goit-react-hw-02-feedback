import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const [good, neutral, bad] = Object.keys(options);
    const arrBtnNames = [good, neutral, bad];

    return (
        <Fragment>
            {arrBtnNames.map(btnName => {
                return (
                    <button
                        key={btnName}
                        id={btnName}
                        className={s.btn}
                        onClick={onLeaveFeedback}
                    >
                        {btnName[0].toUpperCase() + btnName.slice(1)}
                    </button>
                );
            })}
        </Fragment>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
