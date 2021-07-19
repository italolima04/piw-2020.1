import './Post.css';

import ThumbUp from '../../assets/thumb-up.png'

export default function Post({user, content, numberOfLikes}) {
  return (
    <>
      <div className="card">
        <h5 className="card-title">@{user}</h5>
        <p className="card-text">{content}</p>
        <div className="card-likes">
        <h6 className="card-subtitle">{numberOfLikes} Likes</h6>
        <button className="button-card">
            <img src={ThumbUp} alt="Like"/>
        </button>
        </div>
      </div>
    </>
  )
}