import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./sualabdb.sqlite3");

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS test (name TEXT)");

  db.run(
    "CREATE TABLE IF NOT EXISTS media \
    (id INTEGER PRIMARY KEY, \
    title TEXT, date TEXT, \
    media TEXT, link TEXT, \
    image TEXT, content TEXT)",
  );

  db.run(
    "CREATE TABLE IF NOT EXISTS event \
    (id INTEGER PRIMARY KEY, \
    title TEXT, date TEXT, \
    place TEXT,  \
    image TEXT, content TEXT)",
  );
});

db.close();
