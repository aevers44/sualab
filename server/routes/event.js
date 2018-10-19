import express from "express";
import db from '../api/config';
/*
  get / : event list
  get /id : event
*/
const router = express.Router();

router.get("/", (req, res) => {
  
  let result;
  const pageNo = req.query.pageNo || 1;
  const ARTICLE_NUM = 5;

  db.getConnection((err, conn) => {
    const step1 = new Promise((resolve, reject) => {
      conn.query("SELECT * FROM event ORDER BY date DESC LIMIT ? OFFSET ?", [ARTICLE_NUM, ARTICLE_NUM * (pageNo - 1)],
        (err, rows) => {
          if (err) {
            console.error(err);
            res.status(500);
            resolve(false)
          } else {
            result = rows;
            resolve(true)
          }
        },
      );
    })

    const step2 = new Promise((resolve, reject) => {
      conn.query("SELECT COUNT(id) AS total FROM event", (err, row) => {
        if (err) {
          console.error(err);
          res.status(500);
          reject(false);
        } else {
          res.set("X-Total-Count", row[0]["total"]);
          resolve(true)
        }
      });
    })

    Promise.all([step1, step2])
    .then(() => {
      conn.release();
      res.json(result);
    }).catch(err => {
      conn.release();
      res.json(result);
    })
  });

});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  
  let result = {};

  db.getConnection((err, conn) => {
    const step1 = new Promise((resolve, reject) => {
      conn.query("SELECT * FROM event WHERE id=?", [id], (err, row) => {
        if (err) {
          console.error(err);
          res.status(500);
          reject(false);
        } else if (!row) {
          res.status(404);
          reject(false);
        } else {
          result = { ...row[0]};
          resolve(true)
        }
      });
    })

    const step2 = new Promise((resolve, reject) => {
      conn.query("SELECT id, title FROM event WHERE id=(SELECT MAX(id) FROM event WHERE date < (SELECT date FROM event WHERE id = ?))", [id], (err, row) => {
        if (err) {
          console.error(err);
          res.status(500);
          reject(false);
        } else if (row) {
          result.prev = { ...row[0]};
          resolve(true);
        } else {
          result.prev = {
            id: -1,
            title: ""
          };
          resolve(true);
        }
      });
    })

    const step3 = new Promise((resolve, reject) => {
      conn.query("SELECT id, title FROM event WHERE id=(SELECT MIN(id) FROM event WHERE date > (SELECT date FROM event WHERE id = ?))", [id], (err, row) => {
        if (err) {
          console.error(err);
          res.status(500);
          reject(false);
        } else if (row) {
          result.next = { ...row[0] };
          resolve(true);
        } else {
          result.next = {
            id: -1,
            title: ""
          };
          resolve(true);
        }
      });
    })

    Promise.all([step1, step2, step3])
    .then(() => {
      conn.release();
      res.json(result);
    })
    .catch(err => {
      conn.release();
      res.json(result);
    })
  })
  
});


export default router;
