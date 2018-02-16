import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./sualabdb.sqlite3");

db.serialize(() => {
  db.run("CREATE TABLE test (name TEXT)");

  db.run(
    "CREATE TABLE media \
    (id INTEGER PRIMARY KEY, \
    title TEXT, date TEXT, \
    media TEXT, link TEXT, \
    image TEXT, content TEXT)",
  );
});

db.close();
