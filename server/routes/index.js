import express from "express";
import sqlite3 from "sqlite3";

const router = express.Router();

router.get("/test", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");

  db.serialize(() => {
    db.run(
      `
      INSERT INTO media (title, date, media, link, image, content)
      VALUES (?, ?, ?, ?, ?, ?)
    `,
      ["test", 1, "test", "test", "test", "test"],
    );
  });
  db.close();
  res.send("test");
});

import mediaRouter from "./media";
router.use("/media", mediaRouter);
export default router;
