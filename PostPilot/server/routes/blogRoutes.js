import express from "express";
import { addBlog, deleteBlogById, draftBlogs, generateContent, getAllBlogs, getBlogById, publishedBlogs, togglePublish } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), auth, addBlog)
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/draft", draftBlogs);
blogRouter.get("/published", publishedBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete", auth, deleteBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);
blogRouter.post("/generate", auth, generateContent);



export default blogRouter;