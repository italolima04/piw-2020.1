import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

  export async function signinUser(req, res) {
    User.findOne({email: req.body.email}).then(function login(user) {
      if(!bcrypt.compareSync(req.body.password, user.password)) {
        loginFail();
      } else {
        let token = jwt.sign({id: user._id}, process.env.SECRET_KEY);
        res.status(200).json(
          {
            message: 'Authentication successful',
            token: token,
            user_id: user._id
          }
        )
      }
    });
    
    function loginFail() {
      res.status.send({message: 'Login failed, credentials are invalid'});
    }

  }

  export async function validateLogin(req, res, next) {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function (error, decoded) {
      if(error) {
        return res.status(401).json({message: 'Authentication failed', error: error});
      }
      next(); // Execute the next controller
    })
  }