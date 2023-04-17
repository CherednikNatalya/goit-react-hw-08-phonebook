import  Navigation  from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import {selectLoggedIn} from 'redux/Auth/selectors'


export const AppBar = () => {
//   const { isLoggedIn } = useAuth();
const isLoggedIn =useSelector(selectLoggedIn)
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
