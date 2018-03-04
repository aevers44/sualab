import express from "express";
import sqlite3 from "sqlite3";

const router = express.Router();

import mediaRouter from "./media";
router.use("/media", mediaRouter);
import mediaEnRouter from "./media_en";
router.use("/media-en", mediaEnRouter);

import eventRouter from "./event";
router.use("/event", eventRouter);
import eventEnRouter from "./event_en";
router.use("/event-en", eventEnRouter);

import inquiryRouter from "./inquiry";
router.use("/inquiry", inquiryRouter);

import peopleRouter from "./people";
router.use("/people", peopleRouter);

export default router;
