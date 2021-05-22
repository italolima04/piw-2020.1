const express = require("express");
const router = express.Router();

let userController = require("../controllers/userController");
let postController = require("../controllers/postController");

/*----------------------------Routes of User-------------------------------*/

/* Create new user */
router.post("/api/users", function (req, res) {
  let user = userController.createUser(req.body);
  return res.json(user);
});

/* Get users */
router.get("/api/users", function (req, res) {
  return res.json(userController.getUsers());
});

/* Get user by id */
router.get("/api/users/:id", function (req, res) {
  let user = userController.getUserById(req.params.id);
  if (!user) {
    return res
      .json({ message: "Sorry, not exists a user with this id" })
      .status(404);
  } else return res.json(user);
});

/* Delete user by id */
router.delete("/api/users/:id", function (req, res) {
  let deleteSucessful = userController.deleteUserById(req.params.id);
  if (deleteSucessful)
    return res.json({ "User deleted with successful ": true });
  else
    return res.json({
      "Sorry, there was an error deleting the user": false,
    });
});

/*----------------------------Routes of Post-------------------------------*/

/* Create new post */
router.post("/api/posts", function (req, res) {
  let post = postController.createPost(req.body);
  return res.json(post);
});

/* Get posts */
router.get("/api/posts", function (req, res) {
  return res.json(postController.getPosts());
});

/* Get post by id */
router.get("/api/posts/:id", function (req, res) {
  let post = postController.getPostById(req.params.id);
  if (!post) {
    return res
      .json({ message: "Sorry, not exists a post with this id" })
      .status(404);
  } else return res.json(post);
});

/* Delete post by id */
router.delete("/api/posts/:id", function (req, res) {
  let deleteSucessful = postController.deletePostById(req.params.id);
  if (deleteSucessful)
    return res.json({ "Post deleted with successful ": true });
  else
    return res.json({
      "Sorry, there was an error deleting the post": false,
    });
});

module.exports = router;
