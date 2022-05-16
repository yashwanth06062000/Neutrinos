var blogs=[];

exports.addblog=async (req,res)=>{
    const authorname=req.body.authorname;
    const title=req.body.title;
    const content=req.body.content;
    let blog={
    authorname:authorname,
    title:title,
    content:content
    }
    await blogs.push(blog)
    res.sendStatus("200")
}

exports.getblogs=(req,res)=>{
    return res.status(200).send(blogs)

}

