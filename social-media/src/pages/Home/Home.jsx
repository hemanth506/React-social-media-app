import React from "react";
import "./Home.scss";
import Story from "../../components/Story/Story";
import Posts from "../../components/Posts/Posts";

function Home() {
  return (
    <div className="home">
      <Story />
      <Posts />
    </div>
  );
}

export default Home;
