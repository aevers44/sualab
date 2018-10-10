import express from "express";
import db from '../api/config';
/*
  get / : artilce list
  get /id : article
*/
const router = express.Router();

router.get("/", (req, res) => {
  let result;
  const pageNo = req.query.pageNo || 1;
  const ARTICLE_NUM = 5;
  
  db.getConnection((err, conn) => {
    const step1 = new Promise((resolve, reject) => {
      conn.query(
        `select A.*, (select image from media_image where media_id = A.id limit 1) as image
        from media A
        order by date desc LIMIT ? OFFSET ? `, [ARTICLE_NUM, ARTICLE_NUM * (pageNo - 1)],
        (err, rows) => {
          if (err) {
            console.error(err);
            res.status(500);
            reject(false);
          } else {
            result = rows;
            resolve(true);
          }
        },
      );
    })

    const step2 = new Promise((resolve, reject) => {
      conn.query("SELECT COUNT(id) AS total FROM media", (err, row) => {
        if (err) {
          console.error(err);    
          res.status(500);
          reject(false);
        } else {
          res.set("X-Total-Count", row["total"]);
          resolve(true)
        }
      });
    })
    
    Promise.all([step1, step2])
    .then(()=> {
      conn.release();
      res.json(result);
    }).catch(err => {
      conn.release();
      res.json(result);
    })
  
  })
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  let result = {};

  db.getConnection((err, conn) => {
    const step1 = new Promise((resolve,reject) => {
      conn.query(`
        select A.*, B.image as image 
        from media A
        inner join media_image B
        on A.id = B.media_id
        and A.id = ?
        order by B.priority`, [id], (err, rows) => {
          if (err) {
            console.error(err);
            res.status(500);
            reject(false);
          } else if (rows.length === 0) {
            res.status(404);
            reject(false);
          } else {
            result = { 
              ...rows[0],
              images: rows.map(row => row.image)
            };
            resolve(true)
          }
        });
    })

    const step2 = new Promise((resolve, reject) => {
      conn.query("SELECT id, title FROM media WHERE id=(SELECT MAX(id) FROM media WHERE date < (SELECT date FROM media WHERE id = ?))", [id], (err, row) => {
        if (err) {
          console.error(err);
          res.status(500);
          reject(false);
        } else if (row) {
          result.prev = { ...row[0]
          };
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
      conn.query("SELECT id, title FROM media WHERE id=(SELECT MIN(id) FROM media WHERE date > (SELECT date FROM media WHERE id = ?))", [id], (err, row) => {
        if (err) {
          console.error(err);
          res.status(500);
          reject(false);
        } else if (row) {
          result.next = { ...row[0]
          };
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
  });
  
});

export default router;
