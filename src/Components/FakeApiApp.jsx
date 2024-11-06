import PostContainer from "./PostContainer";
import PostForm from "./PostForm";
import { useEffect, useState } from "react";

export default function FakeApiApp() {
  const [newPost, setnewPost] = useState({ title: "", body: "" });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.body) {
      setData([newPost, ...data]);
      setnewPost({
        title: "",
        body: "",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setnewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };
 

  const URL = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <h1>Fake API App</h1>
        <PostForm
          newPost={newPost}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {loading ? <p>Loading...</p> : <PostContainer data={data} />}
      </div>
    </>
  );
}
