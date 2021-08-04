/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route } from 'react-router-dom';

import FeedPage from '../src/pages/FeedPage/FeedPage';
import PublishPage from '../src/pages/PublishPage/PublishPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <FeedPage></FeedPage>
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
    </>
  )
}