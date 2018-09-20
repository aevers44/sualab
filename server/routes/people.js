import express from "express";
import sqlite3 from "sqlite3";
/*
  get / : people list
*/
const router = express.Router();

router.get("/", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  let result;

  // db.all("SELECT * FROM people", (err, rows) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500);
  //   } else {
  //     result = rows;
  //   }
  // });
  const sql = `select  B.category as category, A.priority as priority, name_kr, name_en,C.*
  from category_people A
  inner join category B, people C
  on A.category_id = B.id
  and A.people_id = C.id
  order by B.priority, A.priority`;

  db.all(sql, (err, rows) => {
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
