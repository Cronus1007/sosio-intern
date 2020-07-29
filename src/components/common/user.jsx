import React, { Component } from "react";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
class User extends Component {
  state = {};
  render() {
    return (
      <div className="h1 left ">
        <AccountCircleSharpIcon color="primary" className="size" />
        <br />
        <button className="btn btn-outline-primary top">Check My Bio</button>
      </div>
    );
  }
}

export default User;
