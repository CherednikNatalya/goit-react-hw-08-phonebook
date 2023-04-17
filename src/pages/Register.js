import { Helmet } from 'react-helmet';
import  RegisterPage from 'components/RegisterPage/RegisterPage';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterPage />
    </div>
  );
}
