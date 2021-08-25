import './RegisterPage.css';

import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import CreateUser from '../../api/createUser';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    CreateUser(data).then((response) => {
      history.push('/login');
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="register-page">
      <h2 className="title">Register</h2>
      <form className="form-page" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <section className="container grid grid-template-columns">
            <div className="item item-1">
              <label>Name</label>
              <input type="text" name="name" {...register("name")} />
            </div>
            <div className="item item-2">
              <label>E-Mail</label>
              <input type="email" name="email" {...register("email")} />
            </div>
            <div className="item item-3">
              <label>Password</label>
              <input type="password" name="password" {...register("password")} />
            </div>
            <div className="item item-4">
              <label>Confirm Password</label>
              <input type="password" name="confirm-password" {...register("confirm-password")} />
            </div>
          </section>
        </div>
        <button className="button-submit">
          Register
        </button>
      </form>
      <div className="text-account">
        <p>Already have an account ? :) </p>
        <p>Click here to <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}