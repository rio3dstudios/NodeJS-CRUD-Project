const express = require("express");
const {
    althenticateUser,
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
  } = require("../controllers/UserController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/authenticate").post( althenticateUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
   
module.exports = router;