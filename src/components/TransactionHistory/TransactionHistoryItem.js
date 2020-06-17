import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

const TransactionHistoryItem = ({transactionItem}) => {
	return (
		<>
		<th className={styles.tabCol}>{transactionItem.type}</th>
		<th className={styles.tabCol}>{transactionItem.amount}</th>
		<th className={styles.tabCol}>{transactionItem.currency}</th>
		</>
	) 
}


TransactionHistoryItem.defaultProps = {
	percentage: 0,
  };

  TransactionHistoryItem.propTypes = {
	transactionItem: PropTypes.shape({
		type: PropTypes.string,
		amount: PropTypes.string,
		currency: PropTypes.string,
	}).isRequired,
  }


  export default TransactionHistoryItem;