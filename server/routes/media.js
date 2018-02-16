import express from "express";
import sqlite3 from "sqlite3";
/*
  get / : artilce list
  get /id : article
  post / : add article
  put /id : update article
  delete /id : delete article
*/
const router = express.Router();

router.get("/", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  let result;

  db.all("SELECT * FROM media", (err, rows) => {
    if (err) {
      console.error(err);
      res.json({ error: "error" });
    } else {
      result = rows;
      res.json(result);
    }
  });

  db.close();
});

router.get("/:id", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  db.get("SELECT * FROM media WHERE id=?", [req.params.id], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "server error" });
    } else if (!row) {
      res.status(404).json({ error: "Not found" });
    } else {
      res.json(row);
    }
  });
  db.close();
});

router.post("/", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  const { title, date, media, link, image, content } = req.query;
  let stmt = db
    .prepare("INSERT INTO media (title, date, media, link, image, content) \
  VALUES (?, ?, ?, ?, ?, ?)", [
      title,
      date,
      media,
      link,
      image,
      content,
    ])
    .run(err => {
      if (err) {
        console.error(err);
      }
      res.status(204).json(stmt.lastID);
    });
  stmt.finalize();

  db.close();
});

router.put("/:id", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  const { title, date, media, link, image, content } = req.query;
  db.run(
    "UPDATE media SET title=?, date=?, media=?, link=?, image=?, content=? \
    WHERE id = ?",
    [title, date, media, link, image, content, req.params.id],
    err => {
      if (err) {
        console.error(err);
      }
      res.status(204).json({});
    },
  );

  db.close();
});

router.delete("/:id", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  db.run("DELETE FROM media WHERE id = ?", [req.params.id], err => {
    if (err) {
      console.error(err);
    }
    res.status(204).json({});
  });
});
export default router;
