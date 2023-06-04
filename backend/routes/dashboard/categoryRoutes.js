const router = require("express").Router();

const { authMiddleware } = require('../../middleware/authMiddleware');
const categoryController = require("../../controllers/dashboard/categoryController");


router.post("/category-add", authMiddleware, categoryController.addCategory);
router.get("/category-get", authMiddleware, categoryController.get_category);



module.exports = router;
