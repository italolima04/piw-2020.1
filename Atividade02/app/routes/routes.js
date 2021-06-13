import {Router} from 'express'; 
let router = Router();

import {insertUser, getUser, listUsers, deleteUser} from '../controllers/userController.js';

import {insertPost, getPost, listPosts, getPostsOfUser, deletePost} from '../controllers/postController.js';

import {insertComment, getComment, listComments, getCommentsOfPost, deleteComment} from '../controllers/commentController.js';

/*----------------------------Routes of User-------------------------------*/

/* Create new user */
router.post("/users", insertUser);

/* Get users */
router.get("/users", listUsers);

/* Get user by id */
router.get("/users/:id", getUser);

/* Get posts of user */
router.get("/users/:id/posts", getPostsOfUser);

/* Delete user by id */
router.delete("/users/:id", deleteUser);

/*----------------------------Routes of Post-------------------------------*/

/* Create new post */
router.post("/posts", insertPost);

/* Get posts */
router.get("/posts", listPosts);

/* Get post by id */
router.get("/posts/:id", getPost);

/* Get comments of post */
router.get("/posts/:id/comments", getCommentsOfPost);

/* Delete post by id */
router.delete("/posts/:id", deletePost);

/*----------------------------Routes of Comment-------------------------------*/

/* Create new comment */
router.post("/comments", insertComment);

/* Get comments */
router.get("/comments", listComments);

/* Get comment by id */
router.get("/comments/:id", getComment);

/* Delete comment by id */
router.delete("/comments/:id", deleteComment);

export default router;
