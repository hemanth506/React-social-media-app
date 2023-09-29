import React, { useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";

function Comments() {
  const {currentUser} = useContext(AuthContext)
  const comments = [
    {
      id: 1,
      desc: "Delectus magnam omnis cupiditate quo ratione maiores perspiciatis rem officiis magni molestiae.",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, accusamus amet corporis molestiae quaerat quisquam eveniet officia commodi.",
      name: "John Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
      <img src={currentUser.profilePic} alt="" />
      <input type="text" placeholder="Write a comment..."/>
      <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
}

export default Comments;
