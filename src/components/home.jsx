import React, { Component } from "react";
import User from "./common/user";
import TweetButton from "./button";
import Tweets from "./tweets";
import axios from "axios";
// import Like from "./common/like";
const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
class Home extends Component {
  state = {
    clicked: false,
    data: { value: "" },
    tweets: [],
  };
  async componentDidMount() {
    let { data: tweets } = await axios.get(apiEndPoint);
    for (let keys of tweets) {
      const liked = false;
      keys = { liked, ...keys };
    }
    this.setState({ tweets });
  }
  handleClick = () => {
    console.log("Input render");
    if (this.state.clicked) {
      this.setState({ clicked: false });
      return this.state.clicked;
    } else {
      this.setState({ clicked: true });
      return this.state.clicked;
    }
  };
  handleSave = () => {
    if (this.state.data.value === "") console.log("Empty String");
    console.log(this.state.tweets);
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    data.value = e.currentTarget.value;
    this.setState({ data });
  };
  render() {
    return (
      <div className="col-lg-11 border ">
        {/* <h1>Sosio</h1> */}
        <div className="flex">
          <User />
          <TweetButton
            clicked={this.state.clicked}
            onClick={this.handleClick}
            onSave={this.handleSave}
            value={this.state.data.value}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
        </div>
        <hr className="line" />
        <Tweets tweets={this.state.tweets} />
      </div>
    );
  }
}

export default Home;
