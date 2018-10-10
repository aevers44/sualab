import express from "express";
import db from '../api/config';
/*
  get / : product example
*/

const router = express.Router();

router.get("/example",(req, res) => {
  let result;

  const sql = `select * from suakit_example order by priority`;

  db.getConnection((err, conn) => {
    conn.query(sql, (err, rows) => {
      conn.release();
      if(err) {
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