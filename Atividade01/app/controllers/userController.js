const User = require("../models/User");

let usersList = [];

class UserController {
  static createUser(data) {
    let user = new User(usersList.length, data.name, data.email, data.password);
    usersList.push(user);
    return user;
  }

  static getUsers() {
    return usersList;
  }

  static getUserById(id) {
    let user = usersList.find((user) => {
      return user.id == id;
    });

    if (user) return user;
    else return false;
  }

  static deleteUserById(id) {
    let user = usersList.find((user) => {
      return user.id == id;
    });

    if (user) {
      usersList.splice(usersList.indexOf(user), 1);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = UserController;
