import PropTypes from 'prop-types';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => (
  <li class="item" key={id}>
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </li>
);

FriendsListItem.PropsTypes = {
    avatar: PropTypes.string,
    name:  PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}