import { Profile } from './Profile.js/profile';
import user from './Profile.js/user.json';
import { Statistics } from './Statistics.js/Statistics';
import data from './Statistics.js/data.json';
import { FriendsList } from './FriendsList.js/FriendsList';
import friends from './FriendsList.js/friends.json';
import { TransactionHistory } from './Transactions.js/Transactions';
import transactions from './Transactions.js/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends}/>
      <TransactionHistory items={transactions} />;
    </div>
  );
};
