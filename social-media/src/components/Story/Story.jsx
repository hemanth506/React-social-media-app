import React, { useContext } from 'react'
import "./Story.scss"
import { AuthContext } from '../../context/authContext';

function Story() {
  const {currentUser} = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/17977042/pexels-photo-17977042/free-photo-of-smiling-woman-in-purple-dress-on-vacation.jpeg"
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/17977042/pexels-photo-17977042/free-photo-of-smiling-woman-in-purple-dress-on-vacation.jpeg"
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/17977042/pexels-photo-17977042/free-photo-of-smiling-woman-in-purple-dress-on-vacation.jpeg"
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/17977042/pexels-photo-17977042/free-photo-of-smiling-woman-in-purple-dress-on-vacation.jpeg"
    }
  ]
  return (
    <div className='stories'>
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Story