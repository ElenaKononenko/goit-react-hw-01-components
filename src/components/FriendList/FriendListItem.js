import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../images/defImg.png';
import '../FriendList/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <div>
    <span className="status"></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </div>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
