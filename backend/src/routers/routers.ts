const {userRegistration , userLogin} = require("../controllers/userControllers");
const verifyToken = require("../routers/verifyToken");
const {createBlog, listall, searchByTitle, updateBlog
} = require("../controllers/blogControllers")
const { createComment, deleteComment } = require("../controllers/commentControllers")

const Express = require("express");

const router = Express.Router();
router.route("/user/signup")
    .post(userRegistration);
router.route("/user/login")
    .post(userLogin);
router.route("/blogs/create").post(createBlog); 
router.route("/blogs/listall").get(listall); 
router.route("/blogs/search").post(searchByTitle); 
router.route('/updateblog/:id').post(updateBlog);
router.route('/blog/comment/create').post(createComment);
router.route('/blog/comment/delete').delete(deleteComment);
module.exports = router;