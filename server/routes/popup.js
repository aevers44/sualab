import express from "express";
import db from '../api/config';
/*
  get / : people list
*/
const router = express.Router();

router.get("/:ln", (req, res) => {
  const ln = req.params.ln;
  let result;

  const sql = `select * from popup
  where start_at <= now()  and end_at >= now()
  and active = 1 and lang='${ln}'`;

  db.getConnection((err,conn) => {
    conn.query(sql, (err, rows) => {
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
