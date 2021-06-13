import Post from "../models/Post.js";
import render from '../views/post.js';

  export async function insertPost(req, res) {
    try {
      let promise = await Post.create(req.body);
      res.status(201).json(render(promise));
    }catch(error) {
      return res.status(500).json(error);
    }
  }

  export async function listPosts(req, res) {
    try {
      let promise = await Post.find().exec();
      let posts = promise.map((post) => (render(post)));
      return res.status(200).json(posts);
    } catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }

  export async function getPost(req, res) {
    try{
      let post = await Post.findById(req.params.id);
      if(!post) res.status(404).json({message: "Post not exists"});
      return res.status(200).json(render(post));
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }

  export async function getPostsOfUser(req, res) {
    try{
      let promise = await Post.find({user_id: req.params.id}).exec();
      let posts = promise.map((post) => (render(post)));
      return res.status(200).json(posts);
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }

  export async function deletePost(req, res) {
    try{
      let post = await Post.findById(req.params.id);
      if(!post) res.status(404).json({message: "Post not exists"});
      Post.remove(post).exec();
      return res.status(200).json({message: "Post removed successfully"});
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
}
