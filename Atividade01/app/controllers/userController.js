const User = require("../models/User");

let usersList = [];

class UserController {
  static createUser(data) {
    let user = new User(
      usersList.length++,
      data.name,
      data.email,
      data.password
    );
    usersList.push(user);
    return user;
  }

  static getUsers() {
    return usersList;
  }

  static getUserById(id) {
    for (let i = 0; i < usersList.length; i++) {
      if (usersList[i].id === id) {
        return usersList[i];
      } else {
        return "Sorry, not exists a user with this id";
      }
    }
  }

  static deleteUserById(id) {
    for (let i = 0; i < usersList.length; i++) {
      if (usersList[i] === id) {
        usersList.splice(i, 1);
        return true;
      } else {
        return "Sorry, not exists a user with this id";
      }
    }
    return false;
  }
}

module.exports = UserController;
