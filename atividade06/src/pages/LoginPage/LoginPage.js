import './LoginPage.css';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const { login, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="login-page">
      <h2 className="title">Login</h2>
      <form className="form-page" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <section class="form-login">
            <label>Email</label>
            <input type="email" name="email" />
            <label>Password</label>
            <input type="password" name="password" />
          </section>
        </div>
      </form>
      <div className="account">
        <div className="text-account">
          <p>Don't have an account yet? :/ </p>
          <p>Click here to <Link to="/register">Register</Link></p>
        </div>
        <button className="button-submit" type="submit">
          Login
        </button>
      </div>
    </div>
  )
}