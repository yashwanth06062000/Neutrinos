const express = require("express");
const blogcontroller=require("../Controllers/blogController")

const router=express.Router()

router.post("/add-blog",blogcontroller.addblog)
router.get("/get-blogs",blogcontroller.getblogs)

module.exports=router;