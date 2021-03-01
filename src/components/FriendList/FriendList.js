import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className="item">
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
