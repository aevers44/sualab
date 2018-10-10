import express from "express";
import db from '../api/config'

const router = express.Router();

router.get("/", (req, res) => {
  
  let result = {};
  db.getConnection((err, conn) => {
    conn.query("SELECT * FROM brochure ORDER BY date DESC LIMIT 1", (err, row) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else if (!row) {
        res.status(404);
      } else {
        result = { ...row};
        res.json(result);
      }
    });
  });
});

export default router;
