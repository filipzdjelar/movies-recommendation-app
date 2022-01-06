import './Posts.module.scss';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="wrapper">
      <h1>Posts</h1>
      <Post
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imgLink="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzg4NQ&ixlib=rb-1.2.1&q=85"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim facilisis
        gravida neque convallis a. Volutpat diam ut venenatis tellus."
      />
      <Post
        title="Lorem ipsum dolor sit amet"
        imgLink="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzg4NQ&ixlib=rb-1.2.1&q=85"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dtellus."
      />
      <Post
        title="consectetur adipiscing elit"
        imgLink="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzg4NQ&ixlib=rb-1.2.1&q=85"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim facilisis
        ."
      />
    </div>
  );
};

export default Posts;
