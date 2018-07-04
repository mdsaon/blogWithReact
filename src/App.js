import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import NewPost from './Components/NewPost';
import PostDetails from './Components/PostDetails';
import{
	BrowserRouter as Router,
	Route,
	NavLink,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [
        {
          title:'My day in Integrify',
          category:'Work',
          description:'Some descriptions about the posts'

        },
        {
          title:'My talk in React Meet up',
          category:'Speech',
          description:'Some descriptions about the posts'

        },
        {
          title:'Fun at the beach',
          category:'Recreation',
          description:'Some descriptions about the posts'

        },
        {
          title:'Running in the forest',
          category:'Sport',
          description:'Some descriptions about the posts'

        }
      ]
    }
  }
  handleAddInput =(fields) =>{
    let posts = this.state.posts;
        posts.push(fields);
        this.setState({posts});
        console.log(this.setState({posts}));
  }
 handlePostDetails = () =>{
  
 }
  render() {
    return (
      <div className="App">
      <Router>
      <div>
       <h1 align="center">Welcome to my Blog</h1>
       <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/NewPost">Add Post</NavLink></li>
        <li><NavLink to="/PostDetails">PostDetails</NavLink></li>
      </ul>
    <Switch>
      <Route exact path="/" render={()=>{
	      			return(
	      				<Home posts={this.state.posts}
                      handlePostDetails={this.handlePostDetails}
	      				/>
	      			);
	     }} />

      <Route exact path="/NewPost" render={()=>{
       	      			return(
       	      				<NewPost handleAddInput={this.handleAddInput}/>
       	      			);
       }} />

       <Route exact path="/PostDetails" render={()=>{
                      return(
                        <PostDetails posts={this.state.posts}
                                     handlePostDetails={this.handlePostDetails}/>
                      );
        }} />
      </Switch>
    </div>
  </Router>
</div>
    );
  }
}

export default App;
