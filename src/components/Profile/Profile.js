import React from 'react';

import PropTypes from 'prop-types';
import stylesProfile from './Profile.module.css';
import defaultImage from '../../images/defImg.png';

const Profile = ({
  avatar,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => (
  <div className={stylesProfile.profile}>
    <div className={stylesProfile.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={stylesProfile.avatar}
        width={100}
        height={100}
      />
      <p className={stylesProfile.name}>{name}</p>
      <p className={stylesProfile.tag}>@{tag}</p>
      <p className={stylesProfile.location}>{location}</p>
    </div>

    <ul className={stylesProfile.stats}>
      <li className={stylesProfile.statsItem}>
        <span className={stylesProfile.label}>Followers</span>
        <span className={stylesProfile.quantity}>{followers}</span>
      </li>
      <li className={stylesProfile.statsItem}>
        <span className={stylesProfile.label}>Views</span>
        <span className={stylesProfile.quantity}>{views}</span>
      </li>
      <li className={stylesProfile.statsItem}>
        <span className={stylesProfile.label}>Likes</span>
        <span className={stylesProfile.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
