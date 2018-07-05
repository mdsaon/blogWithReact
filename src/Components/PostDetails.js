import React, { Component } from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";

class PostDetails extends Component {
	handleDelete = (e) => {

	}
  renderPost =() => {
		const postId = Number(this.props.match.params.postId);
    const newObjct  = this.props.posts.filter((post,i) => {
			return i === postId;
		});
		return <div className="single-post">
						<li> <b>Title: </b>{newObjct[0].title}</li>
						<li> <b>Category: </b>{newObjct[0].category}</li>
						<li> <b>Description: </b>{newObjct[0].description}</li>
					 </div>
  }
  render() {
    // console.log("post detail props", this.props.posts);
		// console.log('match',this.props.match)
		// console.log('match',this.props.match.params)
		// console.log('match',this.props.match.params.postId)
    return (
      <div className="post-details">
        <h1 align="center">Post Details will appear here</h1>
				{this.renderPost()}
          <NavLink NavLink exact to="/" className="back-button">
            Back to the Post
          </NavLink>
					<NavLink exact to="/" onClick={this.props.handleDelete} className="delete-button">
										Delete Posts
						 </NavLink>

      </div>
    );
  }
}

export default PostDetails;
