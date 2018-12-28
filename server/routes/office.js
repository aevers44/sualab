import express from "express";
import db from '../api/config';
/*
  get / : office list
*/
const router = express.Router();

router.get("/", (req, res) => {
  let result;

  db.getConnection((err, conn) => {
    conn.query("SELECT * FROM global_office order by company", (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
        res.json(result);
      }
    });
  })

});

router.get("/area", (req, res) => {
  let result;

  db.getConnection((err, conn) => {
    conn.query("SELECT * FROM area order by priority", (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
        res.json(result);
      }
    });
  })

});

router.get("/flags", (req, res) => {
  let result;

  db.getConnection((err, conn) => {
    conn.query("SELECT * FROM flags", (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
        res.json(result);
      }
    });
  })
});

export default router;
