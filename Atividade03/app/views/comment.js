export default function render(comment) { 
  return ({
  id:comment._id,
  text:comment.text,
  post_id:comment.post_id,
  user_id:comment.user_id
}); }