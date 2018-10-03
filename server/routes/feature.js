import express from "express";
import db from '../api/config';
/*
  get / : feature latest
*/
const router = express.Router();

router.get("/", (req, res) => {
  
  let result = {};
  
  db.getConnection((err, conn) => {
    conn.query(`SELECT * FROM feature WHERE version = (SELECT name FROM suakit_release ORDER BY date DESC)`, (err, row) => {
      if (err || !row) {
        console.error(err);
        res.status(500);
      } else {
        result = {...row[0]};
      }

      conn.query("SELECT * FROM feature_item WHERE feature_id=?", [row[0].id], (err, rows) => {
        conn.release();
        if (err) {
          console.error(err);
          res.status(500);
        } else {
          result["items"] = rows;
          res.json(result);
        }
      });
    })
  });

});

router.get("/:version", (req, res) => {
  const version = req.params.version;

  let result = {};

  db.getConnection((err, conn) => {
    conn.query("SELECT * FROM feature WHERE version = ?", [version], (err, row) => {
      if (err || !row) {
        console.error(err);
        res.status(500)
      } else {
        result = { ...row[0]};
  
        conn.query("SELECT * FROM feature_item WHERE feature_id=?", [row[0].id], (err, rows) => {
          if (err) {
            console.error(err);
            res.status(500);
          } else {
            result["items"] = rows;
            res.json(result);
          }
        });
      }
    });
  })
})

export default router;
