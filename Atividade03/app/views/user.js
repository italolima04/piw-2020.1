function render(user) { 
  return ({
  id:user._id,
  name:user.name,
  email:user.email,
}); }

export default render;