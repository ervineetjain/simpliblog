
let allBlogs = JSON.parse(localStorage.getItem('allBlogs'))
let index = localStorage.getItem('index');


let blog = allBlogs[index];
document.getElementById('blogBannerImage').setAttribute("src", blog.blogBanner)
document.getElementById('blogTitle').innerHTML = blog.title
document.getElementById('blogContent').innerHTML = blog.blogContent
document.getElementById('blogAuthor').innerHTML = `~ ${blog.firstName} ${blog.lastName}`
