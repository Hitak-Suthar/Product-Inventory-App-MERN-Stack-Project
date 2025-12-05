const Resource = require("../models/Resource");


const addResource = async (req, res) => {
  try {
    const { title, description, category, status, amount } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required." });
    }

    const resource = new Resource({
      title,
      description,
      category,
      status,
      amount,
      createdBy: req.user._id 
    });

    const savedResource = await resource.save();
    res.status(201).json({ message: "Resource created", resource: savedResource });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find({ createdBy: req.user._id });
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found." });
    }
    if (!resource.createdBy.equals(req.user._id)) {
      return res.status(403).json({ message: "Not authorized to access this resource." });
    }
    res.json(resource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found." });
    }
    if (!resource.createdBy.equals(req.user._id)) {
      return res.status(403).json({ message: "Not authorized to update this resource." });
    }

    const updatedResource = await Resource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "Resource updated", resource: updatedResource });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found." });
    }
    if (!resource.createdBy.equals(req.user._id)) {
      return res.status(403).json({ message: "Not authorized to delete this resource." });
    }

    await Resource.findByIdAndDelete(req.params.id);
    res.json({ message: "Resource deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource
};