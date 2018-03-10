import express from "express";
import sqlite3 from "sqlite3";
/*
  get / : feature latest
*/
const router = express.Router();

router.get("/documentation", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");

  let result = [];

  db.all("SELECT * FROM documentation", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500);
    } else {
      result = rows;
    }
  });

  db.close(err => {
    res.json(result);
  });
});

export default router;
