import React from 'react';
import PropTypes from 'prop-types'; 

import styles from './Statistics.module.css';

import StatisticsItem from './StatisticsItem';



const colors = {
	docx: '#2aada5',
	pdf: '#862aad',
	mp3: '#a84a18',
	psd: '#0b576e',
}

const Statistics = ({ statisticsList }) => {
	return (
		<section className={styles.statistics}>
			<h2 className={styles.title}>Upload stats</h2>
			<ul className={styles.statList}>
				{statisticsList.map(statisticsItem => {
					const propLabelFormat = statisticsItem.label;
					return <li 
					key={statisticsItem.id} 
					className={styles.item}
					style={{background: colors[propLabelFormat]}}>
						<StatisticsItem  statItem = {statisticsItem}/>
				  </li>
				})}
			</ul>
		</section>
	)
};


Statistics.propTypes = {
	statisticsList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			label: PropTypes.string,
			percentage: PropTypes.number,
		})
	).isRequired,
};

export default Statistics;