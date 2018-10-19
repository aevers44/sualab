import express from "express";
import cf from "aws-cloudfront-sign";
import db from "./api/config";

const AWS_ACCESS_KEY_ID = "APKAIZNKKKPD6DRO5NAQ";
const AWS_PRIVATE_KEY_PATH = __dirname + "/../cf-key" + "/pk-APKAIZNKKKPD6DRO5NAQ.pem";
const AWS_CLOUD_FRONT_URL = "https://d13g4sremwg6if.cloudfront.net";

const EXPIRED_TIME = 10 * 60 * 1000;

const router = express.Router();

router.post("/", (req, res) => {

  const name = req.body.name;
  const key = req.body.key;
  const filename = req.body.link;

  let result = {};

  db.getConnection((err, conn) => {
    conn.query("SELECT name FROM customer WHERE name=? AND hash=?", [name, key], (err, row) => {
      conn.release();
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
      res.json(result);
    });
  })
});

export default router;
