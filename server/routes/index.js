import express from "express";
import sqlite3 from "sqlite3";

const router = express.Router();

import mediaRouter from "./media";
router.use("/media", mediaRouter);

import eventRouter from "./event";
router.use("/event", eventRouter);

export default router;