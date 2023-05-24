import React, { useEffect } from 'react';
import FriendsList from '../../components/OurFriends/FriendsList';
import style from './FriendsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { fetchOurFriends } from '../../redux/ourFriends/ourFriends-operations';
import {
  selectIsLoading,
  selectError,
  selectFriends,
} from '../../redux/ourFriends/ourFriends-selector';

const FriendsPage = () => {
  const dispatch = useDispatch();
  const ourFriendsList = useSelector(selectFriends);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchOurFriends());
  }, [dispatch]);

  if (isLoading && !error) {
    return <Loader />;
  }

  return (
    <>
      <h1 className={style.title}>Our friends</h1>
      <FriendsList friends={ourFriendsList} />;
    </>
  );
};

export default FriendsPage;
