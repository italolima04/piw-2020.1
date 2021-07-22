import './Post.css';

import { ButtonNav } from '../ButtonNav/ButtonNav';

import Comment from '../Comment/Comment';

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
            <button >
              <img src={ThumbUp} alt="Like" />
            </button>
            <ButtonNav textButton="Reply"></ButtonNav>
          </div>
        </div>
      </div>
      <div className="line-vertical"></div>
      <Comment></Comment>
    </>
  )
}