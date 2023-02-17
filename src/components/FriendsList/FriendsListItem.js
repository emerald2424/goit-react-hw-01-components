import PropTypes from 'prop-types';
import { ListItem, Span, Avatar, Name } from './FriendsListItem.styled';

export const FriendsListItem = ({avatar, name, isOnline, id}) => (
  <ListItem key={id}>
    <Span isOnline={isOnline}></Span>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </ListItem>
);

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number
}