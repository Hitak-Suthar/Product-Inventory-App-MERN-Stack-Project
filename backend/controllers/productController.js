const Product = require("../models/Product");


const addProduct = async (req, res) => {
  try {
    const { name, category, price, quantity, date } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Product Name is required." });
    }

    const newProduct = new Product({
      name,
      category,
      price,
      quantity,
      date,
      createdBy: req.user._id,
    });


    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


const getAllProducts = async (req, res) => {
  try {
    const Products = await Product.find({ createdBy: req.user._id });
    res.json(Products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const Product = await Product.findById(req.params.id);
    if (!Product) {
      return res.status(404).json({ message: "Product not found." });
    }
    if (!Product.createdBy.equals(req.user._id)) {
      return res.status(403).json({ message: "Not authorized to access this Product." });
    }
    res.json(Product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    if (!product.createdBy.equals(req.user._id)) {
      return res.status(403).json({ message: "Not authorized to delete this Product." });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const deleteAllProducts = async (req, res) => {
  try {

    const result = await Product.deleteMany({ createdBy: req.user._id });
    res.json({ message: `Deleted ${result.deletedCount} products` });
  } catch (err) {
    console.error("DeleteAllProducts error:", err);
    res.status(500).json({ message: "Failed to delete all products" });
  }
};



module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  deleteAllProducts
};