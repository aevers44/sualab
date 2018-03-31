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
    "CREATE TABLE IF NOT EXISTS media_en \
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
    "CREATE TABLE IF NOT EXISTS event_en \
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

  db.run(`
    CREATE TABLE IF NOT EXISTS feature
    (
      id INTEGER PRIMARY KEY,
      version TEXT,
      comment TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS feature_item
    (
      id INTEGER PRIMARY KEY,
      feature_id INTEGER NOT NULL,
      image TEXT,
      title TEXT,
      en_title TEXT,
      content TEXT,
      en_content TEXT,
      FOREIGN KEY (feature_id) REFERENCES feature(id) ON DELETE CASCADE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS documentation
    (
      id INTEGER PRIMARY KEY,
      version TEXT,
      name TEXT,
      en_name TEXT,
      link TEXT,
      en_link TEXT,
      type TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS release_note
    (
      id INTEGER PRIMARY KEY,
      version TEXT,
      date TEXT,
      content TEXT,
      en_content TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS customer
    (
      id INTEGER PRIMARY KEY,
      name TEXT,
      hash TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS suakit_release
    (
      id INTEGER PRIMARY KEY,
      name TEXT,
      date TEXT,
      link TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS global_office
    (
      id INTEGER PRIMARY KEY,
      continent TEXT,
      country TEXT,
      company TEXT,
      address TEXT,
      phone TEXT,
      email TEXT,
      latitude DOUBLE,
      longitude DOUBLE,
      marker_visible INTEGER DEFAULT 1
    )
  `);
});

db.close();
