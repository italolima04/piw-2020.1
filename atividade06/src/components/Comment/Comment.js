import './Comment.css';

export default function Comment({ user_id, text }) {
  return (
    <>
      <div className="card-comment">
        <div className="content">
          <span>
            @{user_id}
          </span>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}