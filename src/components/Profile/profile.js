import PropTypes from 'prop-types';

export const Profile = ({ tag, username, avatar, stats, location }) => {
  return <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>

}

Profile.propTypes = {
  tag: PropTypes.string,
  username: PropTypes.string,
  avatar: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}
