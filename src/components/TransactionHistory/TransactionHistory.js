import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = ({transactionList}) => {
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
		{transactionList.map(transactionItem => {
				return (
					<tr className={styles.tabRow} key={transactionItem.id}><TransactionHistoryItem transactionItem={transactionItem} /></tr>
				)
			})}
		</tbody>
	</table>
	)
}


TransactionHistory.defaultProps = {
	percentage: 0,
  };
  
TransactionHistory.propTypes = {
	transactionList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			type: PropTypes.string,
			amount: PropTypes.string,
			currency: PropTypes.string,
		})
	).isRequired,
  };

  
  export default TransactionHistory;