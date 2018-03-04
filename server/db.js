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

  db.run(
    "CREATE TABLE IF NOT EXISTS inquiry \
    (id INTEGER PRIMARY KEY, \
      name TEXT NOT NULL, phone TEXT NOT NULL, \
      company TEXT NOT NULL, status TEXT, \
      email TEXT NOT NULL, country TEXT, \
      reason TEXT, \
      has_vision INTEGER DEFAULT -1, \
      industry TEXT NOT NULL DEFAULT 'NOT_RELATED', \
      product_type TEXT, \
      fault_type TEXT, \
      num_of_line TEXT, \
      path INTEGER NOT NULL DEFAULT -1, \
      content TEXT NOT NULL, \
      ad_agree INTEGER NOT NULL DEFAULT 0\
    )",
  );

  db.run(
    "CREATE TABLE IF NOT EXISTS people \
      ( \
        id INTEGER PRIMARY KEY, \
        department TEXT NOT NULL, \
        name TEXT NOT NULL, eng_name TEXT NOT NULL, \
        position TEXT, \
        detail TEXT, eng_detail TEXT, \
        imgUrl TEXT \
      ) \
    ",
  );
});

db.close();
