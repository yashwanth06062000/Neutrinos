const submit=document.getElementById('submitbutton');
const blogcontainer=document.getElementById('blog-container')

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const title=document.getElementById('title').value
    const content=document.getElementById('content').value
    const authorname=document.getElementById('authorname').value
    let blog={
        title:title,
        content:content,
        authorname:authorname
    }
    axios
    .post("http://localhost:3000/add-blog",blog)
    .then(()=>{
        document.getElementById("title").value='';
        document.getElementById("content").value='';
        document.getElementById("authorname").value='';

        blogcontainer.innerHTML=""
       
    axios
    .get("http://localhost:3000/get-blogs",)
    .then((blogs)=>{
        
        for(let i=0;i<blogs.data.length;i++)
        { 
            const blogdiv=document.createElement("div")
                  blogdiv.classList.add('blogdiv')
                  blogdiv.innerHTML=`
                  <span class="title">${blogs.data[i].title}</span>
                  <span class="content">${blogs.data[i].content}</span>
                  <span class="author">-${blogs.data[i].authorname}</span>
                  `
                  const blogcontainer=document.getElementById('blog-container')
            blogcontainer.appendChild(blogdiv)
                
        }

    })

    })


})
window.addEventListener('DOMContentLoaded', (event) => {
    axios
    .get("http://localhost:3000/get-blogs",)
    .then((blogs)=>{
        for(let i=0;i<blogs.data.length;i++)
        {
            console.log("hie")
            const blogdiv=document.createElement("div")
                  blogdiv.classList.add('blogdiv')
                  blogdiv.innerHTML=`
                  <span class="title">${blogs.data[i].title}</span>
                  <span class="content">${blogs.data[i].content}</span>
                  <span class="author">-${blogs.data[i].authorname}</span>
          `
          const blogcontainer=document.getElementById('blog-container')
            blogcontainer.appendChild(blogdiv)
                
        }

    })
    
});

