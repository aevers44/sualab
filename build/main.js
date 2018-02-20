"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressAdmin = require("express-admin");

var _expressAdmin2 = _interopRequireDefault(_expressAdmin);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _webpackDevServer = require("webpack-dev-server");

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminConfig = {
  dpath: __dirname + "/../config/",
  config: require(__dirname + "/../config/config.json"),
  settings: require(__dirname + "/../config/settings.json"),
  custom: require(__dirname + "/../config/custom.json"),
  users: require(__dirname + "/../config/users.json")
};

_expressAdmin2.default.init(adminConfig, function (err, admin) {
  if (err) {
    return console.log(err);
  }

  var app = (0, _express2.default)();
  var port = process.env.PORT || 3000;
  var devPort = 8080;

  app.use(_bodyParser2.default.urlencoded({ extended: false }));
  app.use(_bodyParser2.default.json());

  if (process.env.NODE_ENV === "development") {
    console.log("Server is running on development mode");

    var config = require("../webpack.dev.config");
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
      console.log("webpack-dev-server is listening on port", devPort);
    });
  }

  app.use("/admin", admin);

  app.use(_express2.default.static(_path2.default.join(__dirname, "..", "public")));

  app.use("/api", _routes2.default);

  app.get("*", function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, "..", "public", "index.html"));
  });

  var server = app.listen(port, function () {
    console.log("Express listening on port", port);
  });
});