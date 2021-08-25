import './Timeline.css';

import Post from '../Post/Post';
export default function Timeline({ posts }) {

  return (
    <div className="timeline">
      <ul>
        {
          posts.map((post) => (
            <Post key={post.id} user={post.user_id} content={post.content} numberOfLikes={post.likes} />
          ))
        }
      </ul>
    </div>
  )
}