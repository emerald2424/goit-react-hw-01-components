import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import { List } from './FriendsList.styled';

export const FriendsList = ({ friends }) => (
    <List>
        {friends.map(friend => (
            <FriendsListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}/>
            ))}
    </List>
)

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

// export const FriendsList = ({ friends }) => (
//     <ul className="friend-list">
//         {friends.map(({id, avatar, name, isOnline}) => (
//             <li className="item" key={id}>
//             <span className="status">{isOnline}</span>
//             <img className="avatar" src={avatar} alt="User avatar" width="48" />
//             <p className="name">{name}</p>
//           </li>
//             ))}
//     </ul>
// )

// FriendsList.propTypes = {
//     friends: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         avatar: PropTypes.string.isRequired,
//         name:  PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired,
//     })).isRequired,
// }