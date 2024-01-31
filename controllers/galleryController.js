import galleryModel from "../models/gallery.js";
import categoryModel from "../models/category.js";
class galleryController {
  static uploadImage = async (req, res) => {
    const { category } = req.body;
    try {
      if (category) {
        const addImage = galleryModel({
          name: req.file.filename,
          category: category,
        });

        const saved_image = await addImage.save();
        if (saved_image) {
          return res.status(200).json({ message: "file upload successfully" });
        }
      } else {
        return res.status(400).json({ message: "all fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static addNewCategory = async (req, res) => {
    const { name } = req.body;
    try {
      if (name) {
        const newCategory = categoryModel({
          name: name,
        });

        const saved_category = await newCategory.save();
        if (saved_category) {
          return res
            .status(200)
            .json({ message: "category added successfully" });
        }
      } else {
        return res.status(400).json({ message: "all fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static getAllCategories = async (req, res) => {
    try {
      const fetchAllCategories = await categoryModel.find({});
      return res.status(200).json(fetchAllCategories);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static getAllImages = async (req, res) => {
    try {
      const fetchAllImages = await galleryModel.find({});
      return res.status(200).json(fetchAllImages);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static getsingleImage = async (req, res) => {
    const { category } = req.query;
    try {
      if (category) {
        const getCategoryBasedImages = await galleryModel.find({
          category,
        });
        return res.status(200).json(getCategoryBasedImages);
      } else {
        return res.status(400).json({ message: "all fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default galleryController;
