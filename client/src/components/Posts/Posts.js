import "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className="wrapper">
      <h1>Posts</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
