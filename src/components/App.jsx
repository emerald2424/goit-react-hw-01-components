import { Profile } from './Profile/profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendsList } from './FriendsList/FriendsList';
import friends from './FriendsList/friends.json';
import { TransactionHistory } from './Transactions/Transactions';
import transactions from './Transactions/transactions.json';


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
