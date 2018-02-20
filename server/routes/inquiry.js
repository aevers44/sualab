import express from "express";
import sqlite3 from "sqlite3";
/*
  get / : artilce list
  get /id : article
*/
const router = express.Router();

router.post("/", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");
  console.log(req);
  const {
    name,
    phone,
    company,
    status,
    email,
    country,
    reason,
    hasVision,
    industry,
    productType,
    faultType,
    numOfLine,
    path,
    content,
    adAgree,
  } = req.body;
  let stmt = db
    .prepare(
      "INSERT INTO inquiry (name, phone, company, status, email, country, reason, \
              has_vision, industry, product_type, fault_type, num_of_line, \
              path, content, ad_agree) \
              VALUES (?, ?, ?, ?, ?, ?, ?, \
                      ?, ?, ?, ?, ?, \
                      ?, ?, ?)",
      [
        name,
        phone,
        company,
        status,
        email,
        country,
        reason,
        hasVision,
        industry,
        productType,
        faultType,
        numOfLine,
        path,
        content,
        adAgree,
      ],
    )
    .run(err => {
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        res.status(204).json(stmt.lastID);
      }
    });
  stmt.finalize();

  db.close();
});

export default router;
