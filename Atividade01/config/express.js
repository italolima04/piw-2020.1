const express = require("express");
let routes = require("../app/routes/routes");
let bodyParser = require("body-parser");

module.exports = function () {
  let app = express();
  app.set("port", 4000);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extend: false }));
  app.use("", routes);
  return app;
};
