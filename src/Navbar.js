import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/"><h1>myBlog's</h1></a>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
             color: 'white',
           backgroundColor: '#f80',
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
