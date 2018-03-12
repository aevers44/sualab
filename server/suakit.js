import express from "express";
import sqlite3 from "sqlite3";
import cf from "aws-cloudfront-sign";

const AWS_ACCESS_KEY_ID = "APKAIZNKKKPD6DRO5NAQ";
const AWS_PRIVATE_KEY_PATH = __dirname + "/../cf-key" + "/pk-APKAIZNKKKPD6DRO5NAQ.pem";
const AWS_CLOUD_FRONT_URL = "https://d13g4sremwg6if.cloudfront.net";

const EXPIRED_TIME = 10 * 60 * 1000;

const router = express.Router();

router.post("/", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");

  const name = req.body.name;
  const key = req.body.key;
  const filename = req.body.link;

  let result = {};

  db.get("SELECT name FROM customer WHERE name=? AND hash=?", [name, key], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500);
    } else {
      if (row !== undefined) {
        const options = {
          keypairId: AWS_ACCESS_KEY_ID,
          privateKeyPath: AWS_PRIVATE_KEY_PATH,
          expireTime: new Date().getTime() + EXPIRED_TIME,
        };

        const url = `${AWS_CLOUD_FRONT_URL}/${filename}`;
        const signedUrl = cf.getSignedUrl(url, options);
        result = { url: signedUrl };
      } else {
        result = { error: "Not available" };
      }
    }
  });

  db.close(err => {
    res.json(result);
  });
});

export default router;
