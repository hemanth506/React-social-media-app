import "./LeftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Marketplace from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Event from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function LeftBar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt="pixelImg"
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="Friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="Groups" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Marketplace} alt="Marketplace" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="Watch" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="Memories" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Event} alt="Event" />
            <span>Event</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="Gaming" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="Gallery" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="Videos" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="Messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="Fund" />
            <span>Fund</span>
          </div>
          <div className="item">
            <img src={Courses} alt="Courses" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="Tutorials" />
            <span>Tutorials</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
