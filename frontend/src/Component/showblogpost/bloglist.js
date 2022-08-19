const BlogList = ({ blogs, title}) => {
  console.log(typeof(blogs))
  let nblog = Object.entries(blogs);
  console.log(nblog[1])

    return (
      <div className="blog-list">
        <center><h2>{ title }</h2></center>
        {
        
        nblog[1][1].map(blog => (
        <div className="blog-preview"  >
          {console.log(blog.BLOG_TITLE)}
            <center><h1>{ blog.BLOG_TITLE }</h1>
            <h3>Written by {blog.NAME}</h3>
            <h4>TIME : {blog.TIME}</h4>
            <h4>Category : {blog.CATEGORY}</h4>
            </center>

            <p>{ blog.BLOG_CONTENT }</p>


            


          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;