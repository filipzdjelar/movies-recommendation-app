import classes from "./Post.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const Post = () => {
  const bindClasses = classNames.bind(classes);

  return (
    <div className={classes.wrapper}>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      <img
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzg4NQ&ixlib=rb-1.2.1&q=85"
        width="288"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim facilisis
        gravida neque convallis a. Volutpat diam ut venenatis tellus.
      </p>
    </div>
  );
};

export default Post;
