import React from 'react';

import PropTypes from 'prop-types';

import s from './Notification.module.css';

const Notification = ({ message }) => {
    return <div className={s.message}>{message}</div>;
};

Notification.defaultProps = {
    message: '',
};

Notification.propTypes = {
    message: PropTypes.string,
};

export default Notification;
