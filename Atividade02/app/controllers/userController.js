import User from "../models/User.js";
import render from '../views/user.js';

  export async function insertUser(req, res) {
    try {
      let promise = await User.create(req.body);
      return res.status(201).json(render(promise));
    }catch(error) {
      return res.status(500).json(error);
    }
  }

  export async function listUsers(req, res) {
    try{
      let promise = await User.find().exec();
      let users = promise.map((user) => (render(user)));
      return res.status(200).json(users);
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }

  export async function getUser(req, res) {
    try{
      let user = await User.findById(req.params.id);
      if(!user) res.status(404).json({message: "User not exists"});
      return res.status(200).json(render(user));
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }

  export async function deleteUser(req, res) {
    try {
      let user = await User.findById(req.params.id);
      if(!user) res.status(404).json({message: "User not exists"});
      User.remove(user).exec();
      return res.status(200).json({message: "User removed successfully"});
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }
