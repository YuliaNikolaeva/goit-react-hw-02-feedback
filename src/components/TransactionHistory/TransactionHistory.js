import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({props}) => {
	return (
		
	<table className={styles.transactionHistory}>
		<thead className={styles.thead}>
			<tr className={styles.headRow}>
				<th className={styles.headCol}>Type</th>
				<th className={styles.headCol}>Amount</th>
				<th className={styles.headCol}>Currency</th>
			</tr>
		</thead>
		<tbody>
		{props.map(prop => {
				return (
					<tr className={styles.tabRow} key={prop.id}>
						<th className={styles.tabCol}>{prop.type}</th>
						<th className={styles.tabCol}>{prop.amount}</th>
						<th className={styles.tabCol}>{prop.currency}</th>
					</tr>
				)
			})}
		</tbody>
	</table>
	)
}

export default TransactionHistory;

TransactionHistory.defaultProps = {
	percentage: 0,
  };
  
TransactionHistory.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
  };