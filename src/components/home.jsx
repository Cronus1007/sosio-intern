import React, { Component } from "react";
import User from "./common/user";
import TweetButton from "./button";
import Tweets from "./tweets";
import axios from "axios";
// import Like from "./common/like";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    setTimeout(() => {
      console.log("Saved");
      const value = this.state.data.value;
      if (value === "") return toast.error("Invalid");
      const obj = {
        body:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        userId: 1,
        title: value,
      };
      const newTweets = this.state.tweets.unshift(obj);
      const tweets = this.state.tweets;
      this.setState({ tweets });
      toast.success("Successful");
    }, 5000);
  };
  handleSaveAsync = () => {
    console.log("Clicked");
    return (dispatchEvent) => {
      setTimeout(() => {
        console.log("entered");
        dispatchEvent(this.handleSave());
      }, 5000);
    };
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
    const tweets = this.state.tweets;
    console.log(tweets);

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
        <Tweets tweets={tweets} />
      </div>
    );
  }
}

export default Home;
