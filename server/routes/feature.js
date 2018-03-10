import express from "express";
import sqlite3 from "sqlite3";
/*
  get / : feature latest
*/
const router = express.Router();

router.get("/", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");

  let result = {};

  db.get("SELECT * FROM feature ORDER BY id DESC LIMIT 1", (err, row) => {
    if (err) {
      console.error(err);
      res.status(500);
    } else {
      result = { ...row };

      db.all("SELECT * FROM feature_item WHERE feature_id=?", [row.id], (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500);
        } else {
          result["items"] = rows;
        }
      });
    }
  });

  db.close(err => {
    res.json(result);
  });
});

export default router;
