import express from "express";
import path from "path";
import { HTTP_INTERNAL_SERVER_ERROR } from "../utils/http_code";

const TAG = " routes.ts ====> ";

const router = express.Router();

// loads the initial page
router.get("/home", (req, res) => {
  try {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
  } catch (error) {
    console.error(TAG, error);
    return res.status(HTTP_INTERNAL_SERVER_ERROR).send(
      JSON.stringify({
        payload: [],
      }),
    );
  }
});

export default router;
