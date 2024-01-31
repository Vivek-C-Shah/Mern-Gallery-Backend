import express from "express";
import galleryController from "../controllers/galleryController.js";
const router = express.Router();

router.post(
  "/upload/image",
  galleryController.uploadImage
);

router.post("/add/category", galleryController.addNewCategory);
router.get("/get/categories", galleryController.getAllCategories);
router.get("/get/images", galleryController.getAllImages);
router.get("/get/singleimage", galleryController.getsingleImage);

export default router;