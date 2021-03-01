import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../images/defImg.png';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnlineClass = isOnline ? styles.isOnline : styles.isOfLine;
  return (
    <>
      <span className={isOnlineClass}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
