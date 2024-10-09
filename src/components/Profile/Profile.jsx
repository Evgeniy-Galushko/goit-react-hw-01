// import PropTypes from 'prop-types'

import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileCard}>
      <div className={css.profileImg}>
    <img
      src={image}
          alt="User avatar" 
    />
    <p className={css.profileName}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
  </div>
      <ul className={css.list}>
    <li>
      <span className={css.title}>Followers</span>
      <span className={css.namber}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.title}>Views</span>
      <span className={css.namber}>{stats.views}</span>
    </li>
    <li>
      <span className={css.title}>Likes</span>
      <span className={css.namber}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

