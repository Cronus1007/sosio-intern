import React, { Component } from "react";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
class User extends Component {
  state = {};
  render() {
    return (
      <div className="h1 left ">
        <AccountCircleSharpIcon color="primary" className="size" />
        <br />
        <p className="p">
          {" "}
          User Bio Lorem ipsum User Bio Lorem ipsum User Bio Lorem ipsum User
          Bio Lorem ipsum
        </p>
      </div>
    );
  }
}

export default User;
