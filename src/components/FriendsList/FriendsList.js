import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';

export const FriendsList = ({ friends }) => (
    <ul class="friend-list">
        {friends.map(friend => (
            <FriendsListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}/>
            ))}
    </ul>
)

FriendsList.PropsTypes = {
    friends: PropTypes.array,
}