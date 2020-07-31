import React, { Component } from "react";
import axios from "axios";
// import Like from "./common/like";
const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
class TweetsApp extends Component {
  state = {
    tweets: [],
  };
  async componentDidMount() {
    let { data: tweets } = await axios.get(apiEndPoint);
    for (let keys of tweets) {
      const liked = false;
      keys = { liked, ...keys };
    }
    console.log(tweets);
    this.setState({ tweets });
  }
  handleDelete = async (tweet) => {
    const orignalTweets = this.state.tweets;
    const tweets = this.state.tweets.filter((t) => t.id !== tweet.id);
    this.setState({ tweets });
    try {
      await axios.delete(apiEndPoint + "/" + tweet.id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Not Found");
        this.setState({ tweets: orignalTweets });
      }
    }
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Tweet</th>

            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tweets.map((tweet) => (
            <tr key={tweet.id}>
              <td>{tweet.title}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.handleDelete(tweet)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TweetsApp;
