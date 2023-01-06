const express = require("express");
const authMiddleware = require("../middlewares/Auth");
const {
    openDashboard
  } = require("../controllers/dashboardController");

const router = express.Router();

router.use(authMiddleware);
router.route("/").get(openDashboard);

   
module.exports = router;