import express from "express";
import { getTokenSummaryController, home } from "../controllers/mcRugCheckController.js";

const router = express.Router();

router.get("/tokens/:mint/report/summary", getTokenSummaryController);
router.get("/", home);

export default router;
