import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';
import css from './LoginForm.module.css';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
     
     <label className={css.label}>
          Email
          <input className={css.inputStyle} type="email" name="email" />
        </label>

        <label className={css.label}>
          Password
          <input className={css.inputStyle} type="password" name="password" />
        </label>
      <Button  type="submit"
    variant="contained"  size="medium"
    sx={{m: 1}}> Log In </Button>
      
    </form>
  );
};