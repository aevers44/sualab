import express from "express";
import sqlite3 from "sqlite3";
/*
  get / : artilce list
  get /id : article
*/
const router = express.Router();

router.get("/", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  let result;
  const pageNo = req.query.pageNo || 1;
  const ARTICLE_NUM = 5;

  db.all(
    `select A.*, (select image from media_en_image where media_id = A.id limit 1) as image
    from media_en A
    order by date desc LIMIT ? OFFSET ? `, [ARTICLE_NUM, ARTICLE_NUM * (pageNo - 1)],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
      }
    },
  );

  db.get("SELECT COUNT(id) AS total FROM media_en", (err, row) => {
    if (err) {
      console.error(err);
      res.status(500);
    } else {
      res.set("X-Total-Count", row["total"]);
    }
  });

  db.close(err => {
    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  let result = {};
  db.serialize(() => {
    db.all(`
    select A.*, B.image as image 
    from media_en A
    inner join media_en_image B
    on A.id = B.media_id
    and A.id = ?
    order by B.priority`, [id], (err, row) => {
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

    db.get("SELECT id, title FROM media_en WHERE id=(SELECT MAX(id) FROM media_en WHERE date < (SELECT date FROM media_en WHERE id = ?))", [id], (err, row) => {
      if (err) {
        console.error(err);
        res.status(500);
      } else if (row) {
        result.prev = { ...row
        };
      } else {
        result.prev = {
          id: -1,
          title: ""
        };
      }
    });

    db.get("SELECT id, title FROM media_en WHERE id=(SELECT MIN(id) FROM media_en WHERE date > (SELECT date FROM media_en WHERE id = ?))", [id], (err, row) => {
      if (err) {
        console.error(err);
        res.status(500);
      } else if (row) {
        result.next = { ...row
        };
      } else {
        result.next = {
          id: -1,
          title: ""
        };
      }
    });
  });

  db.close(err => {
    res.json(result);
  });
});

export default router;
