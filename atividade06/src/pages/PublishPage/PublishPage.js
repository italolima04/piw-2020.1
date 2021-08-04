import './PublishPage.css';

import NavBar from '../../components/NavBar/NavBar';
import FormPost from '../../components/FormPost/FormPost';

export default function PublishPage() {
  return (
    <div className="publish-page">
      <div className="publish-page-content">
        <NavBar user="Ítalo Lima"> </NavBar>
        <FormPost> </FormPost>
      </div>
    </div>
  )
}