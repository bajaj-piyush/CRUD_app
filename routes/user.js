const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const {
  users,
  UserById,
  deleteUSerById,
  postUser,
  updateUserById,
  htmlUser,
} = require("../controller/user.js");

// router.get("/", async (req,res)=>{
//     const dbUser = await User.find({});
//    const html = `
//    <ul>
//     ${dbUser.map((user) => `<li>${user.firstName +" "+ (user.lastName?user.lastName:"")} - ${user.email}</li>`).join(" ")}
//    </ul>
//    `;
//    res.send(html);
// })

router.route("/list").get(htmlUser);

router.route("/").get(users).post(postUser);

router.route("/:id").get(UserById).patch(updateUserById).delete(deleteUSerById);

module.exports = router;
