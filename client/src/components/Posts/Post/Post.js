import classes from "./Post.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const Post = ({ title, imgLink, description }) => {
  const bindClasses = classNames.bind(classes);

  return (
    <div className={classes.wrapper}>
      <h3>{title}</h3>
      <img src={imgLink} width="288" />
      <p>{description}</p>
    </div>
  );
};

export default Post;
