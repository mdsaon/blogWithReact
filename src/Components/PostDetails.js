import React, { Component } from 'react';
import Home from './Home';
import{
	BrowserRouter as Router,
	Route,
	NavLink,
  Link,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';

class PostDetails extends Component {
  handlePostDetails= () => {
    this.props.handlePostDetails();
  }
  render() {
    console.log(this.props.posts)
    return (
      <div className="post-details">
      <h1 align="center">Post Details will appear here</h1>
      //{this.props.posts.map(post => <p> {post.description}</p>)}
      {this.handlePostDetails}
      <button onClick="">
      <NavLink NavLink exact to="/">
        Back to the Post
      </NavLink>
      </button>
      <button onClick="">Delete Posts</button>
      </div>
    );
  }
}

export default PostDetails;
