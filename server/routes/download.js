import express from "express";
import sqlite3 from "sqlite3";
/*
  get / : feature latest
*/
const router = express.Router();

router.get("/suakit", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  let result = {};
  db.get("SELECT * FROM suakit_release ORDER BY id DESC LIMIT 1", (err, row) => {
    if (err) {
      console.error(err);
      res.status(500);
    } else {
      result = { ...row };
    }
  });
  db.close(err => {
    res.json(result);
  });
});

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

router.get("/release", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");

  let result = [];

  db.all("SELECT * FROM release_note ORDER BY id DESC", (err, rows) => {
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
