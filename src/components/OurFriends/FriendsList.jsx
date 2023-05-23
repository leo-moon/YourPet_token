import React from 'react';
import FriendCard from 'components/OurFriends/FriendCard';
import style from './OurFriends.module.scss';

const FriendsList = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      {friends.map(friend => (
        <FriendCard
          key={friend._id}
          title={friend.title}
          imageUrl={friend.imageUrl}
          workDays={friend.workDays}
          address={friend.address}
          email={friend.email}
          phone={friend.phone}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
