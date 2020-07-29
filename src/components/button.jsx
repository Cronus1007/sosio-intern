import React, { Component } from "react";
// import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
class TweetButton extends Component {
  state = {};
  render() {
    const { onClick } = this.props;
    return (
      <button
        className="btn btn-outline-primary right"
        variant="outlined"
        onClick={onClick}
        color="primary"
      >
        <AddIcon />
        Create New Tweet
      </button>
    );
  }
}

export default TweetButton;
