import PropTypes from 'prop-types';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => (
  <li className="item" key={id}>
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendsListItem.PropsTypes = {
    avatar: PropTypes.string,
    name:  PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}