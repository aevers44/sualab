import express from "express";
import bodyParser from "body-parser";
import xAdmin from "express-admin";
import path from "path";
import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";

import apiRouter from "./routes";

const adminConfig = {
  dpath: __dirname + "/../config/",
  config: require(__dirname + "/../config/config.json"),
  settings: require(__dirname + "/../config/settings.json"),
  custom: require(__dirname + "/../config/custom.json"),
  users: require(__dirname + "/../config/users.json"),
};

xAdmin.init(adminConfig, (err, admin) => {
  if (err) {
    return console.log(err);
  }

  const app = express();
  let port = process.env.PORT || 3000;
  let devPort = 8080;

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  if (process.env.NODE_ENV === "development") {
    console.log("Server is running on development mode");

    const config = require("../webpack.dev.config");
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
      console.log("webpack-dev-server is listening on port", devPort);
    });
  }

  app.use("/admin", admin);

  app.use(express.static(path.join(__dirname, "..", "public")));

  app.use("/api", apiRouter);

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
  });

  const server = app.listen(port, () => {
    console.log("Express listening on port", port);
  });
});
