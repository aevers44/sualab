import express from "express";
import cf from "aws-cloudfront-sign";

const AWS_ACCESS_KEY_ID = "APKAIZNKKKPD6DRO5NAQ";
const AWS_PRIVATE_KEY_PATH = __dirname + "/../cf-key" + "/pk-APKAIZNKKKPD6DRO5NAQ.pem";
const AWS_CLOUD_FRONT_URL = "https://d13g4sremwg6if.cloudfront.net";

const EXPIRED_TIME = 10 * 60 * 1000;

const router = express.Router();

router.get("/", (req, res) => {
  const name = req.query.name;
  const key = req.query.key;

  if (true) {
    const options = {
      keypairId: AWS_ACCESS_KEY_ID,
      privateKeyPath: AWS_PRIVATE_KEY_PATH,
      expireTime: new Date().getTime() + EXPIRED_TIME,
    };

    const testfile = "747979929_lNi9Hs2d_1cf2932cef8f4b84a74f1ea998fc22382fee4b41.jpg";
    const url = `${AWS_CLOUD_FRONT_URL}/${testfile}`;
    const signedUrl = cf.getSignedUrl(url, options);
    res.json({ url: signedUrl });
  } else {
    res.status(500).json({ error: "No user" });
  }
});

export default router;
