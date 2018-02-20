import express from "express";
import sqlite3 from "sqlite3";
/*
  get / : event list
  get /id : event
*/
const router = express.Router();

router.get("/", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  let result;
  const pageNo = req.query.pageNo || 1;
  const ARTICLE_NUM = 5;

  db.all(
    "SELECT * FROM event ORDER BY id DESC LIMIT ? OFFSET ?",
    [ARTICLE_NUM, ARTICLE_NUM * (pageNo - 1)],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
      }
    },
  );

  db.get("SELECT COUNT(id) AS total FROM event", (err, row) => {
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
    db.get("SELECT * FROM event WHERE id=?", [id], (err, row) => {
      if (err) {
        console.error(err);
        res.status(500);
      } else if (!row) {
        res.status(404);
      } else {
        result = { ...row };
        // res.json(row);
      }
    });

    db.get("SELECT id, title FROM event WHERE id=(SELECT MAX(id) FROM event WHERE id < ?)", [id], (err, row) => {
      if (err) {
        console.error(err);
        res.status(500);
      } else if (row) {
        result.prev = { ...row };
      } else {
        result.prev = { id: -1, title: "" };
      }
    });

    db.get("SELECT id, title FROM event WHERE id=(SELECT MIN(id) FROM event WHERE id > ?)", [id], (err, row) => {
      if (err) {
        console.error(err);
        res.status(500);
      } else if (row) {
        result.next = { ...row };
      } else {
        result.next = { id: -1, title: "" };
      }
    });
  });

  db.close(err => {
    res.json(result);
  });
});

// router.post("/", (req, res) => {
//   const db = new sqlite3.Database("./sualabdb.sqlite3");
//   const { title, date, place, image, content } = req.query;
//   let stmt = db
//     .prepare("INSERT INTO event (title, date, place, image, content) \
//   VALUES (?, ?, ?, ?, ?)", [
//       title,
//       date,
//       place,
//       image,
//       content,
//     ])
//     .run(err => {
//       if (err) {
//         console.error(err);
//       }
//       res.status(204).json(stmt.lastID);
//     });
//   stmt.finalize();

//   db.close();
// });

// router.put("/:id", (req, res) => {
//   const db = new sqlite3.Database("./sualabdb.sqlite3");
//   const { title, date, place, image, content } = req.query;
//   db.run(
//     "UPDATE event SET title=?, date=?, place=?, image=?, content=? \
//     WHERE id = ?",
//     [title, date, place, image, content, req.params.id],
//     err => {
//       if (err) {
//         console.error(err);
//       }
//       res.status(204).json({});
//     },
//   );

//   db.close();
// });

// router.delete("/:id", (req, res) => {
//   const db = new sqlite3.Database("./sualabdb.sqlite3");
//   db.run("DELETE FROM event WHERE id = ?", [req.params.id], err => {
//     if (err) {
//       console.error(err);
//     }
//     res.status(204).json({});
//   });
// });
export default router;
