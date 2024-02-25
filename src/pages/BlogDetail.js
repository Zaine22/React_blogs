import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

function BlogDetail() {
  let params = useParams();
  let url = "http://localhost:4000/blogs/" + params.id;
  let { data: blog, error, loading } = useFetch(url);
  let navigate = useNavigate();

  useEffect(() => {
    if (error) {
      //redirect to home page
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [error]);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>posted by - {blog.author}</p>
          <p>{blog.body}</p>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
