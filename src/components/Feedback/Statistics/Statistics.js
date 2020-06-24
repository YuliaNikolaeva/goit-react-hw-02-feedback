import React, { Fragment } from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Fragment>
            <ul className={s.statistics__list}>
                <li className={s.statistics__list}>
                    <div className={s.statistics__name}>Goog:</div>
                    <div className={s.statistics__value}>{good}</div>
                </li>
                <li className={s.statistics__list}>
                    <div className={s.statistics__name}>Neutral:</div>
                    <div className={s.statistics__value}>{neutral}</div>
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
        </Fragment>
    );
};

export default Statistics;
