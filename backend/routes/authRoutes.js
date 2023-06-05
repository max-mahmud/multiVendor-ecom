const router = require("express").Router();

const authControllers = require('../controllers/authControllers')
const {authMiddleware} = require('../middleware/authMiddleware')

router.post("/admin-login", authControllers.admin_login);

router.get("/get-user",authMiddleware, authControllers.getUser);
router.get("/logout",authMiddleware, authControllers.logout);

router.post("/seller-login", authControllers.seller_login);
router.post("/seller-register", authControllers.seller_register);
router.post("/profile-image-upload",authMiddleware, authControllers.profile_image_upload);


module.exports = router;
