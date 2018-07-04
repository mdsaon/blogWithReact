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
                       <NavLink NavLink exact to={`/PostDetails/${index}`}>
                        <b>Index:</b> {index} <br/>
                        <b>Title: </b> {post.title} <br />
                        <b>Category: </b>{post.category}
                        </NavLink>
                      </li>);
    return (
      <div className="all-post">
      <button className="addButton" >
        <NavLink NavLink exact to="/NewPost">
          Add New Post
        </NavLink>
      </button>
        {posts}
      </div>
    );
  }
}

export default Home;
