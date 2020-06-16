import React from 'react';
import PropTypes from 'prop-types'; 

import styles from './Statistics.module.css';

const colors = {
	docx: '#2aada5',
	pdf: '#862aad',
	mp3: '#a84a18',
	psd: '#0b576e',
}

const Statistics = ({props}) => {
	return (
		<section className={styles.statistics}>
			<h2 className={styles.title}>Upload stats</h2>
			<ul className={styles.statList}>
				{props.map(propItem => {
					const propLabelFormat = propItem.label;
					return <li 
					key={propItem.id} 
					className={styles.item}
					style={{background: colors[propLabelFormat]}}
					>
						<span className={styles.label}>.{propItem.label}</span>
						<span className={styles.percentage}>{propItem.percentage}%</span>
				  </li>
				})}
			</ul>
		</section>
	)
};

export default Statistics;

Statistics.defaultProps = {
	percentage: 0,
  };
  
Statistics.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	percentage: PropTypes.number,
  };