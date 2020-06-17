import React from 'react';
import PropTypes from 'prop-types'; 

import styles from './FriendList.module.css';
import FriendItem from './FriendItem';
import defaultUserImage from './default-user.png'

const FriendList = ({friends}) => {
	return (
		<section>
			<ul className={styles.list}>
				{friends.map(friend => {
					return (
						<li className={styles.item} key={friends.id}><FriendItem friendItem={friend} /></li>
					)
				})}
			</ul>
		</section>
	);
};


FriendList.defaultProps = {
	avatar: defaultUserImage,
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	),
};

export default FriendList;