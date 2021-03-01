import React from 'react';
import user from './data/user.json';
import statics from './data/statistical-data.json';
import friends from './data/friends.json';
import Profile from './components/Profile/Profile';
import transactions from './data/transactions.json';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statics} />
      <FriendList friends={friends} children />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
