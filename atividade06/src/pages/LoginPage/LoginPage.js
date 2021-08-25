import './LoginPage.css';

import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Login from '../../api/auth';
import { AuthContext } from '../../routes';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const auth = useContext(AuthContext);
  const history = useHistory();

  const onSubmit = (data) => {
    Login(data).then((response) => {
      console.log(response);
      auth.setAuth({ token: response.data.token, name: response.data.name, user_id: response.data.user_id })
      history.push('/');
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="login-page">
      <h2 className="title-login">Login</h2>
      <form className="form-page" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <section className="form-login">
            <label>Email</label>
            <input type="email" name="email" {...register("email")} />
            <label>Password</label>
            <input type="password" name="password" {...register("password")} />
          </section>
        </div>
        <button className="button-submit-login">
          Login
        </button>
      </form>
      <div className="text-account-login">
        <p>Don't have an account yet? :/ </p>
        <p>Click here to <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}