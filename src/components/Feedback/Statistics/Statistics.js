import React from 'react';

import PropTypes from 'prop-types';

import s from './Statistics.module.css';

const Statistics = ({ options, total, positivePercentage }) => {
    const { good, netural, bad } = options;
    return (
        <>
            <ul className={s.statistics__list}>
                <li className={s.statistics__list}>
                    <div className={s.statistics__name}>Neutral:</div>
                    <div className={s.statistics__value}>{good}</div>
                </li>
                <li className={s.statistics__list}>
                    <div className={s.statistics__name}>Neutral:</div>
                    <div className={s.statistics__value}>{netural}</div>
                </li>

                <li className={s.statistics__list}>
                    <div className={s.statistics__name}>Bad:</div>
                    <div className={s.statistics__value}>{bad}</div>
                </li>
            </ul>

            <ul className={s.statisticsTotal}>
                <li className={s.statisticsTotal__all}>
                    <div className={s.statisticsTotal__name}>Total:</div>
                    <div className={s.statisticsTotal__value}>{total()}</div>
                </li>

                <li className={s.statisticsTotal__positive}>
                    <div className={s.positive__name}>Positive feedback:</div>
                    <div className={s.positive__value}>
                        {positivePercentage()}%
                    </div>
                </li>
            </ul>
        </>
    );
};

Statistics.propTypes = {
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
    options: PropTypes.exact({
        good: PropTypes.number,
        netural: PropTypes.number,
        bad: PropTypes.number,
    }),
};

export default Statistics;
