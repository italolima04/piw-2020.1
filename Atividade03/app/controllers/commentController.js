import Comment from "../models/Comment.js";
import render from '../views/comment.js';
import jwt from 'jsonwebtoken';

  export async function insertComment(req, res) {
    let user_id = req.body.user_id;
    let token = req.headers.token;
    let payload = jwt.decode(token);

    if(user_id != payload.id) {
    return res.status(403).json({message: 'Authentication failed'});
    }

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
      let user_id = comment.user_id;
      let token = req.headers.token;
      let payload = jwt.decode(token);
  
      console.log(user_id);
      console.log(payload);
      
      if(user_id != payload.id) {
      return res.status(403).json({message: 'Authentication failed'});
      }

      if(!comment) res.status(404).json({message: "Comment not exists"});
      Comment.remove(comment).exec();
      return res.status(200).json({message: "Comment removed successfully"});
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }
