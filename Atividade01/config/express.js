const express = require("express");
const routes = require("../app/routes/routes");

module.exports = function () {
  let app = express();
  app.set("port", 4000);
  app.use("", routes);
  return app;
};
