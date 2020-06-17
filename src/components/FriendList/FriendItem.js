import React from 'react';
import PropTypes from 'prop-types'; 

import styles from './FriendItem.module.css';
import defaultUserImage from './default-user.png';

const FriendItem = ({friendItem}) => {
	return (
		<>
			<span className={friendItem.isOnline ? styles.online : styles.offline}></span>
			<img className={styles.avatar} src={friendItem.avatar} alt="friend avatar" width="48" />
			<p className={styles.name}>{friendItem.name}</p>
		</>
	)
};


FriendItem.defaultProps = {
	avatar: defaultUserImage,
}

FriendItem.propTypes = {
	friendItem: PropTypes.shape({
		avatar: PropTypes.string,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
	}),
};


export default FriendItem;