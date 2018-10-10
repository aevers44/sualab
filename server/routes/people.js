import express from "express";
import db from '../api/config';
/*
  get / : people list
*/
const router = express.Router();

router.get("/", (req, res) => {
  let result;

  const sql = `select  B.category as category, A.priority as priority, name_kr, name_en,C.*
  from category_people A
  inner join category B
  inner join people C
  on A.category_id = B.id
  and A.people_id = C.id
  order by B.priority, A.priority`;

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
