import React from 'react';
import FriendListItem from './FriendListItem';
import stylesFriend from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className={stylesFriend.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={stylesFriend.item}>
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
