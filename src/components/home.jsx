import React, { Component } from "react";
import User from "./common/user";
import TweetButton from "./button";
import Tweets from "./tweets";
class Home extends Component {
  state = {};
  handleClick() {
    console.log("Clicked");
  }
  render() {
    return (
      <div className="col-lg-11 border ">
        {/* <h1>Sosio</h1> */}
        <div className="flex">
          <User />
          <TweetButton onClick={this.handleClick} />
        </div>
        <hr className="line" />
        <Tweets />
      </div>
    );
  }
}

export default Home;
