/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import FeedPage from '../src/pages/FeedPage/FeedPage';
import PublishPage from '../src/pages/PublishPage/PublishPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import { createContext, useState } from 'react';

export const AuthContext = createContext({ token: null, name: null, user_id: null });

export default function Routes() {
  const [auth, setAuth] = useState({ token: localStorage.getItem("token"), name: localStorage.getItem("name"), user_id: localStorage.getItem("user_id") });

  const setAuthLocalStorage = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem("token", newAuth.token);
    localStorage.setItem("name", newAuth.name);
    localStorage.setItem("user_id", newAuth.user_id);
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth: setAuthLocalStorage }}>
      <BrowserRouter>
        <Route exact path="/">
          {
            auth.token == null ? <Redirect to="/login"> </Redirect> : <FeedPage></FeedPage>
          }
        </Route>
        <Route path="/publish">
          <PublishPage></PublishPage>
        </Route>
        <Route path="/register">
          <RegisterPage></RegisterPage>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}