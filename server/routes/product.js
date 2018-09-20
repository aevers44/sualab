import express from "express";
import sqlite3 from "sqlite3";
/*
  get / : product example
*/

const router = express.Router();

router.get("/example",(req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  let result;

  const sql = `select * from suakit_example order by priority`;

  db.all(sql, (err, rows) => {
    if(err) {
      console.error(err);
      res.status(500);
    } else {
      result = rows;
    }
  });

  db.close(err => {
    res.json(result)
  });
});

export default router;