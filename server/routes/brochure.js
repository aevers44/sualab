import express from "express";
import sqlite3 from "sqlite3";

const router = express.Router();

router.get("/", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  let result = {};
  db.serialize(() => {
    db.get("SELECT * FROM brochure ORDER BY date DESC LIMIT 1", (err, row) => {
      if (err) {
        console.error(err);
        res.status(500);
      } else if (!row) {
        res.status(404);
      } else {
        result = { ...row
        };
      }
    });

    db.close(err => {
      res.json(result);
    });
  });
});

export default router;
