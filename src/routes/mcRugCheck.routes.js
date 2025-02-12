import express from "express";
import { getTokenSummaryController, getTokenReportController, home } from "../controllers/mcRugCheckController.js";

const router = express.Router();

router.get("/v1/tokens/:mint/report/summary", getTokenSummaryController);
router.get("/v1/tokens/:mint/report", getTokenReportController);
router.get("/v1", home);

export default router;
