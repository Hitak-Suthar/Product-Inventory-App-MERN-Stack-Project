const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  deleteAllProducts, 
} = require("../controllers/productController");

router.post("/", protect, addProduct);
router.get("/", protect, getAllProducts);


router.delete("/all", protect, deleteAllProducts);

router.get("/:id", protect, getProductById);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;
