import React, { Component } from 'react';
import PostDetails from './PostDetails';
import{
	BrowserRouter as Router,
	Route,
	NavLink,
  Link,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';

class Home extends Component {
  render() {
    let posts = this.props.posts.map((post,index) =>
                      <li key={index.toString()} className="all-post-area" onClick={this.handlePostDetails}>
                        <NavLink exact to={`/PostDetails/${index}`} className="all-post-items">
                        <b>Title: </b> {post.title} <br />
                        <b>Category: </b>{post.category}
                        </NavLink>
                      </li>);
    return (
      <div className="all-post">
        <div>
				 <NavLink NavLink exact to="/NewPost" className="addButton">
          Add New Post
        </NavLink>
				</div>
        {posts}
      </div>
    );
  }
}

export default Home;
