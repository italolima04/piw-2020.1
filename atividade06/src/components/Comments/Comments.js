import Comment from '../Comment/Comment';

export default function Comments({ comments }) {
  return (
    <div className="comments">
      <ul>
        {
          comments.map((comment) => (
            <Comment user_id={comment.user_id} text={comment.text} />
          ))
        }
      </ul>
    </div>
  )
}