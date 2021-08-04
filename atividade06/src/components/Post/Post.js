import './Post.css';

import { Link } from 'react-router-dom'

import Comment from '../Comment/Comment';
import InputComment from '../InputComment/InputComment';

import ThumbUp from '../../assets/thumb-up.png'


export default function Post({ user, content, numberOfLikes }) {
  return (
    <>
      <div className="card">
        <h5 className="card-title">@{user}</h5>
        <p className="card-text">{content}</p>
        <div className="card-likes">
          <h6 className="card-subtitle">{numberOfLikes} Likes</h6>
          <div className="button-card">
            <button className="like-button">
              <img src={ThumbUp} alt="Like" />
            </button>
          </div>
        </div>
      </div>
      <div className="line-vertical"></div>
      <div className="content-comment">
        <Comment>
        </Comment>
        <div className="content-comment-submit">
          <InputComment placeholder="Type a comment here">
          </InputComment>
          <Link to="/publish" className="submit-link">
            Add Comment
          </Link>
        </div>
      </div>
    </>
  )
}