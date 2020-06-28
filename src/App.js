import React, { useState, Component } from "react";
import Post from "./components/Post";
import { connect } from "react-redux";
//import posts from "./post.json";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
  }
  fetchPosts() {
    const { setPosts } = this.props;
    setPosts([]);
    axios
      .get("https://run.mocky.io/v3/c1f4211c-8db2-446e-97b8-725e702b4cc9")
      .then(({ data }) => {
        setPosts(data);
      });
  }

  render() {
    const { post } = this.props;
    const { items } = post;
    return (
      <div>
        <h2>Источник:{this.props.sourceNews.source}</h2>
        <ul>
          <li>
            <button onClick={() => this.props.changeSource("TENGRI")}>
              TengriNews
            </button>
          </li>
          <li>
            <button onClick={() => this.props.changeSource("KZPRAVDA")}>
              KazPravda
            </button>
          </li>
          <li>
            <button onClick={() => this.props.changeSource("SPUTNIK")}>
              SputnikNews
            </button>
          </li>
        </ul>
        <button onClick={this.fetchPosts.bind(this)}>Get Data</button>
        {items && !items.length ? (
          <span>Loading...</span>
        ) : (
          items &&
          items.map((post, index) => {
            return (
              <Post
                key={index}
                image={post.image}
                title={post.title}
                description={post.description}
              />
            );
          })
        )}
      </div>
    );
  }
}

const state = (props) => {
  return props;
};

const actions = (dispatch) => ({
  setPosts: (data) =>
    dispatch({
      type: "SET_POSTS",
      payload: data,
    }),
  changeSource: (name) =>
    dispatch({
      type: "CHANGE_SOURCE",
      payload: name,
    }),
});

export default connect(state, actions)(App);
