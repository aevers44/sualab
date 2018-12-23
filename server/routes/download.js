import express from "express";
import db from "../api/config";
/*
  get / : feature latest
*/
const router = express.Router();

router.post("/auth", (req, res) => {
  const name = req.body.name;
  const key = req.body.key;

  let result = {};

  db.getConnection((err, conn) => {
    conn.query("SELECT name FROM customer WHERE name=? AND hash=?", [name, key], (err, row) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        if (row !== undefined) {
          result = { auth: true };
        } else {
          result = { auth: false };
        }
        res.json(result);
      }
    });
  })

});

router.get("/suakit", (req, res) => {
  let result = {};

  db.getConnection((err, conn) => {
    conn.query("SELECT * FROM suakit_release ORDER BY DATE DESC LIMIT 1", (err, row) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = { ...row[0]};
      }
      res.json(result);
    });
  })

});

router.get("/previous-suakit", (req, res) => {
  let result = [];

  db.getConnection((err, conn) => {
    conn.query("SELECT * FROM suakit_release ORDER BY date DESC ", (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
      }
      res.json(result);
    });
  });
})

router.get("/documentation", (req, res) => {
  let result = [];

  db.getConnection((err, conn) => {
    conn.query("SELECT * FROM documentation", (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
      }
      res.json(result);
    });
  })
});

router.get("/release", (req, res) => {
  let result = [];

  db.getConnection((err,conn) => {
    conn.query("SELECT * FROM release_note ORDER BY id DESC", (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
      }
      res.json(result);
    });
  });
});


router.get("/suakits", (req, res) => {
  let result = [];

  db.getConnection((err,conn) => {
    conn.query("SELECT * FROM suakit_release order by priority limit 4", (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
      }
      res.json(result);
    });
  });
});

router.get("/suakit/:id", (req, res) => {
  const id = req.params.id;
  let result = [];

  db.getConnection((err,conn) => {
    conn.query(`SELECT * FROM suakit_release WHERE id = ${id}`, (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
      }
      res.json(result);
    });
  });
});

router.get("/features/:id", (req, res) => {
  const id = req.params.id;
  let result = [];

  db.getConnection((err,conn) => {
    conn.query(`SELECT * FROM feature_item WHERE feature_id = (SELECT id FROM feature WHERE suakit_id = ${id})`, 
    (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
      }
      res.json(result);
    });
  });
});

router.get("/document/:id", (req, res) => {
  const id = req.params.id;
  let result = [];

  db.getConnection((err,conn) => {
    conn.query(`SELECT * FROM documentation where suakit_id = ${id}`, 
    (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
      }
      res.json(result);
    });
  });
});

router.get("/release/:id", (req, res) => {
  const id = req.params.id;
  let result = [];

  db.getConnection((err,conn) => {
    conn.query(`SELECT * FROM release_note where suakit_id = ${id} order by date desc`, 
    (err, rows) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        result = rows;
      }
      res.json(result);
    });
  });
});

export default router;
