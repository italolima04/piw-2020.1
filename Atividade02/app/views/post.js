export default function render(post) { 
  return ({
  id:post._id,
  content:post.content,
  likes:post.likes,
  user_id:post.user_id
}); }