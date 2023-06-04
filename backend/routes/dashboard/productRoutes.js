const router = require("express").Router();

const productController = require("../../controllers/dashboard/productController");
const { authMiddleware } = require('../../middleware/authMiddleware');


router.post("/product-add", authMiddleware, productController.add_product);
router.post("/product-update", authMiddleware, productController.product_update);
router.post("/product-image-update", authMiddleware, productController.product_image_update);
router.get("/products-get", authMiddleware, productController.get_products);
router.get("/product-get/:productId", authMiddleware, productController.product_get);


module.exports = router;
