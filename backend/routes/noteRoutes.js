import express from "express";

const router = express.Router();

router.post("/register");
router.post("/login");
router.post("/me");

export default router;
