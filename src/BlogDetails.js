import {useHistory , useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
          const{id} = useParams();
          const { data:blog, IsPending, error } = useFetch('http://localhost:8000/blogs/' + id);
          const history = useHistory();
      const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
          method: "DELETE"
          }).then(() => {
            console.log('Blog Deleted');
            history.push("/");
          })
      }        
          return (
    <div className="blog-details">
      {/* <h1>New Blogs Details - {id}</h1> */}
      {error && <div>{error}</div>}
      {IsPending && <div className="spinner"></div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <br />
          <p>Written By {blog.author}</p>
          <br />
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
