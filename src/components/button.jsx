import React, { Component } from "react";
// import { Button } from "@material-ui/core";
import Input from "./common/input";
import AddIcon from "@material-ui/icons/Add";
class TweetButton extends Component {
  state = {};
  render() {
    const { onClick, clicked, onSave, value, onSubmit, onChange } = this.props;
    return (
      <div className="right">
        <button
          className="btn btn-outline-primary"
          variant="outlined"
          onClick={onClick}
          color="primary"
        >
          <AddIcon />
          Create New Tweet
        </button>{" "}
        <div className="margin">
          {clicked ? (
            <Input
              onSave={onSave}
              value={value}
              onSubmit={onSubmit}
              onChange={onChange}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default TweetButton;
