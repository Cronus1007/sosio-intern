import React, { Component } from "react";
import Stats from "./images/6fc87b09f1fd082b8939b6425bef6a1d5397e532.svg";
import Bridge from "./images/https___www.history.com_.image_MTY1MTc3MjE0MzExMDgxNTQ1_topic-golden-gate-bridge-gettyimages-177770941.jpg";
class StaticComponent extends Component {
  render() {
    return (
      <div>
        <h3 className="mb-4">
          Recent Tweets of the User About a topic goes below{" "}
        </h3>
        <div className="mb-5">
          <h1 className="span mr-19">
            <img src={Bridge} className="img" alt="Bridge" />
          </h1>
          <p className="span  " id="para">
            Use our built in widgets
          </p>
        </div>
        <div className="mb-5">
          <h1 className="span mr-17 ">
            <img src={Bridge} className="img" alt="Bridge" />
          </h1>
          <p className="span  " id="para">
            or upload your own images
          </p>
        </div>
        <div className="mb-5">
          <h1 className="span mr-13 ">
            <img src={Stats} className="bridge" alt="Stats" />
          </h1>
          <p className="span " id="para">
            Copy and paste, undo and redo with familiar keyboard shortcuts
          </p>
        </div>
      </div>
    );
  }
}

export default StaticComponent;
