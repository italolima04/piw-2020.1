const Post = require("../models/Post");

let postsList = [];

class PostController {
  static createPost(data) {
    let post = new Post(postsList.length++, data.content, data.likes);
    postsList.push(post);
    return post;
  }

  static getPosts() {
    return postsList;
  }

  static getPostById(id) {
    for (let i = 0; i < postsList.length; i++) {
      if (postsList[i].id === id) {
        return postsList[i];
      } else {
        return "Sorry, not exists a post with this id";
      }
    }
  }

  static deletePost(id) {
    for (let i = 0; i < postsList.length; i++) {
      if (postsList[i].id === id) {
        postsList.splice(i, 1);
        return true;
      } else {
        return "Sorry, not exists a post with this id";
      }
    }
    return false;
  }
}

module.exports = PostController;
