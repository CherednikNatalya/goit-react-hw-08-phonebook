import { useDispatch } from 'react-redux';
import {register} from 'redux/Auth/operations'
import css from './RegisterForm.module.css';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RegisterPage =() =>{
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
          register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
      };

    return(
//       
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        
        
        <label className={css.label}>
          Username
          <input className={css.inputStyle} type="text" name="name" />
        </label>


        <label className={css.label}>
          Email
          <input className={css.inputStyle} type="email" name="email" />
        </label>


        <label className={css.label}>
          Password
          <input className={css.inputStyle} type="password" name="password" />
        </label>

        <Button type="submit"
    variant="contained"  size="medium"
    sx={{m: 1}}>Register</Button>
       
      </form> 
    )

}
export default  RegisterPage