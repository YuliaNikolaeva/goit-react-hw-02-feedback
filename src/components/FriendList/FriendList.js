import React from 'react';
import PropTypes from 'prop-types'; 

import styles from './FriendList.module.css';
import defaultUserImage from './default-user.png'

const FriendList = ({props}) => {
	return (
		<section>
			<ul className={styles.list}>
				{props.map(prop => {
					return (
						<li className={styles.item} key={prop.id}>
							<span className={prop.isOnline ? styles.online : styles.offline}></span>
							<img className={styles.avatar} src={prop.avatar} alt="friend avatar" width="48" />
							<p className={styles.name}>{prop.name}</p>
						</li>
					)
				})}
			</ul>
		</section>
	);
};

export default FriendList;

FriendList.defaultProps = {
	avatar: defaultUserImage,
};

FriendList.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	isOnline: PropTypes.bool,
	id: PropTypes.number,
};