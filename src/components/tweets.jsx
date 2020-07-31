import React, { Component } from "react";
import TweetsApp from "./getTweets";
class Tweets extends Component {
  render() {
    const { tweets } = this.props;
    return <TweetsApp tweets={tweets} />;
  }
}

export default Tweets;
