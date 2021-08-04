import './RegisterPage.css';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="register-page">
      <h2 className="title">Register</h2>
      <form className="form-page" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <section class="container grid grid-template-columns">
            <div className="item item-1">
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div className="item item-2">
              <label>E-Mail</label>
              <input type="email" name="email" />
            </div>
            <div className="item item-3">
              <label>Password</label>
              <input type="password" name="password" />
            </div>
            <div className="item item-4">
              <label>Confirm Password</label>
              <input type="password" name="confirm-password" />
            </div>
          </section>
        </div>
      </form>
      <div className="account">
        <div className="text-account">
          <p>Already have an account ? :) </p>
          <p>Click here to <Link to="/login">Login</Link></p>
        </div>
        <button className="button-submit" type="submit">
          Register
        </button>
      </div>
    </div>
  )
}