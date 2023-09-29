import React from "react";
import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/Posts/Posts";
function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://images.pexels.com/photos/18011660/pexels-photo-18011660/free-photo-of-danilo-e-katia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="profilePic"
          src="https://images.pexels.com/photos/15114772/pexels-photo-15114772/free-photo-of-a-woman-wearing-a-scarf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https:facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https:facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https:facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https:facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            {/* <a href="https:facebook.com">
              <PinterestIcon fontSize="large" />
            </a> */}
          </div>

          <div className="center">
            <span>Jone Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>lama.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>

          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
