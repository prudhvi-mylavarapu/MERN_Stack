import imagekit from "../configs/imageKit.js";
import fs from "fs"
import Blog from "../models/blog.js";
import main from "../configs/gemini.js";


export const addBlog = async (req, res)=> {
    try {
        const {title, summary, description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;
        
        // Check if all fields are present
        if(!title || !description || !category || !imageFile){
            return res.json({success: false, message: "Missing required fields"})
        }

        const fileBuffer = fs.readFileSync(imageFile.path)

        // Upload Image to ImageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "blogs"
        })

        // optimization through imagekit URL transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'}, // Auto compression
                {format: 'webp'}, // convert to modern format
                {width: '1280'} // width resizing
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({title, summary, description, category, image, isPublished})

        return res.json({success: true, message: "Blog created successfully"})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getAllBlogs = async(req, res)=> {
    try {
        const blogs = await Blog.find({isPublished: true})
        res.json({success: true, blogs})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getBlogById = async(req, res)=>{
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);
        if(!blog){
            return res.json({success: false, message: "Blog not found"})
        }
        res.json({success: true, blog})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const deleteBlogById = async(req, res)=>{
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);
        res.json({success: true, message: "Blog Deleted Successfully"})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const togglePublish = async (req, res)=>{
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({success: true, message: "Blog Status Updated"})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const draftBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: false });
        res.json({ success: true, blogs });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const publishedBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true });
        res.json({ success: true, blogs });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const generateContent = async (req, res)=>{
    try {
        const {prompt} = req.body;
        const content = await main(prompt + 'Generate a blog content for this topic in simple text format')
        res.json({success: true, content})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}