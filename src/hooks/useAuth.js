import { useSelector } from 'react-redux';
import {
selectUser,
  selectLoggedIn,
  selectIsRefreshing,
} from 'redux/Auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};