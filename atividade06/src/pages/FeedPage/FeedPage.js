import './FeedPage.css';

import { useContext, useState } from 'react';
import { AuthContext } from '../../routes';
import { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Timeline from '../../components/Timeline/Timeline';
import LoggedNavBar from '../../components/LoggedNavBar/LoggedNavBar';
import ListPosts from '../../api/listPosts';
import Comments from '../../components/Comments/Comments';
import ListComments from '../../api/listComments';

export default function FeedPage() {
  const { auth } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    ListPosts(auth.token).then((response) => {
      setPosts(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, []);



  return (
    <div className="feed-page">
      {
        auth.token == null ? <NavBar user={auth.name}> </NavBar> : <LoggedNavBar user={auth.name}></LoggedNavBar>
      }
      <Timeline posts={posts}> </Timeline>
    </div>
  )
}