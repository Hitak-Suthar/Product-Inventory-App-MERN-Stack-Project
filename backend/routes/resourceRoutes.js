// routes/resourceRoutes.js
const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  addResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource
} = require("../controllers/resourceController");


router.post("/", protect, addResource);
router.get("/", protect, getAllResources);
router.get("/:id", protect, getResourceById);
router.put("/:id", protect, updateResource);
router.delete("/:id", protect, deleteResource);

module.exports = router;