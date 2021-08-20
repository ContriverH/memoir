const {userRegistration , userLogin} = require("../controllers/userControllers");
const verifyToken = require("../routers/verifyToken");
const {createBlog, listall, searchByTitle} = require("../controllers/blogControllers")
const Express = require("express");

const router = Express.Router();
//User Registration and Login
router.route("/user/registration")
    .post(userRegistration);
router.route("/user/login")
    .post(userLogin);

router.route("/blogs/create").post(createBlog); 
router.route("/blogs/listall").get(listall); 
router.route("/blogs/search").post(searchByTitle); 

module.exports = router;