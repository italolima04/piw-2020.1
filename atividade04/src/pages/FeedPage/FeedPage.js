import './FeedPage.css';

import NavBar from '../../components/NavBar/NavBar';
import Timeline from '../../components/Timeline/Timeline';

export default function FeedPage() {
  return (
    <div className="feed-page">
      <NavBar user="Ítalo Lima"> </NavBar>
      <Timeline> </Timeline>
    </div>
  )
}