import { useSelector } from 'react-redux';
import {
    getUser,
  isUserLogin,
//   selectIsRefreshing,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(isUserLogin);
//   const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(getUser);

  return {
    isLoggedIn,
    // isRefreshing,
    user,
  };
};