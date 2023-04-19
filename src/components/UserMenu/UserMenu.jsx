import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button 
      type="button" onClick={() => dispatch(logOut())}
      variant="contained" size="small">
          Logout
        </Button>

    </div>
  );
};

export default UserMenu