import User from "../models/User.js";
import render from '../views/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

  export async function insertUser(req, res) {
    try {
      let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10) //Encrypt password (string). 
      });
      let promise = await User.create(user);
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
      let token = req.headers.token;
      let payload = jwt.decode(token);

      console.log(user._id);
      console.log(payload.id);

      if(user._id != payload.id) {
        return res.status(403).json({message: 'Authentication failed'});
      }
      if(!user) res.status(404).json({message: "User not exists"});
      User.remove(user).exec();
      return res.status(200).json({message: "User removed successfully"});
    }catch(error) {
      return res.status(500).json({error: error}).end();
    }
  }
