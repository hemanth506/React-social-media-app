import React from "react";
import "./Posts.scss";
import Post from "../Post/Post";

function Posts() {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/17977042/pexels-photo-17977042/free-photo-of-smiling-woman-in-purple-dress-on-vacation.jpeg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, doloribus nulla pariatur est iste eos fuga maxime, cupiditate fugiat odit cumque enim facere officiis ratione molestias veritatis, a assumenda! Doloribus.",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/17977042/pexels-photo-17977042/free-photo-of-smiling-woman-in-purple-dress-on-vacation.jpeg",
      desc: "Accusamus, doloribus nulla pariatur est iste eos fuga maxime, cupiditate fugiat odit cumque enim facere officiis ratione molestias veritatis, a assumenda! Doloribus.",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
