import Comment from "../models/Comment.js";
import render from '../views/comment.js';

  export async function insertComment(req, res) {
    try {
      let promise = await Comment.create(req.body);
      return res.status(201).json(render(promise));
    }catch(error) {
      return res.status(500).json(error);
    }
  }

  export async function listComments(req, res) {
    try{
      let promise = await Comment.find().exec();
      let comments = promise.map((comment) => (render(comment)));
      return res.status(200).json(comments);
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }

  export async function getComment(req, res) {
    try {
      let comment = await Comment.findById(req.params.id).exec();
      if(!comment) res.status(404).json({message: "Comment not exists"});
      return res.status(200).json(render(comment));
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }

  export async function getCommentsOfPost(req, res) {
    try{
      let promise = await Comment.find({post_id: req.params.id}).exec();
      let comments = promise.map((comment) => (render(comment)));
      return res.status(200).json(comments);
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }

  export async function deleteComment(req, res) {
    try {
      let comment = await Comment.findById(req.params.id);
      if(!comment) res.status(404).json({message: "Comment not exists"});
      Comment.remove(comment).exec();
      return res.status(200).json({message: "Comment removed successfully"});
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }
