const Post = require("../models/Post");

let postsList = [];

class PostController {
  static createPost(data) {
    let post = new Post(postsList.length, data.content, data.likes);
    postsList.push(post);
    return post;
  }

  static getPosts() {
    return postsList;
  }

  static getPostById(id) {
    let post = postsList.find((post) => {
      return post.id == id;
    });
    if (post) return post;
    else return false;
  }

  static deletePostById(id) {
    let post = postsList.find((post) => {
      return post.id == id;
    });

    if (post) {
      postsList.splice(postsList.indexOf(post), 1);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = PostController;
