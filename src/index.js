import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import user from './jsons/user.json';
import statisticalData from './jsons/statistical-data.json';
import friends from './jsons/friends.json';
import transaction from './jsons/transactions.json';

import UserProfile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics props={ statisticalData }/>
      <FriendList props={ friends }/>
      <TransactionHistory props={ transaction }/>
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);


