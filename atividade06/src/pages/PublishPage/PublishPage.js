import './PublishPage.css';

import NavBar from '../../components/NavBar/NavBar';
import FormPost from '../../components/FormPost/FormPost';
import { useContext } from 'react';
import { AuthContext } from '../../routes';
import LoggedNavBar from '../../components/LoggedNavBar/LoggedNavBar';

export default function PublishPage() {
  const { auth } = useContext(AuthContext);
  return (
    <div className="publish-page">
      <div className="publish-page-content">
        {
          auth.token == null ? <NavBar user={auth.name}> </NavBar> : <LoggedNavBar user={auth.name}></LoggedNavBar>
        }
        <FormPost> </FormPost>
      </div>
    </div>
  )
}