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

import featureRouter from "./feature";
router.use("/feature", featureRouter);

import downloadRouter from "./download";
router.use("/download", downloadRouter);

import officeRouter from "./office";
router.use("/office", officeRouter);

import brochureRouter from "./brochure";
router.use("/brochure", brochureRouter);

export default router;
