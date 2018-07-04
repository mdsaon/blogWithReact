import React, { Component } from 'react';
import{
	BrowserRouter as Router,
	Route,
	NavLink,
  Link,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';

class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      category:'',
      description:''
    }
  }
  onChange =(e) =>{
    let name =e.target.name;
    let value =e.target.value;
    this.setState({
      [name]:value
    });
  }
  handleAddInput =(e) =>{
    e.preventDefault();
    this.props.handleAddInput(this.state);
  }
  render() {
    return (
      <div className="new-post">
        <div className="form-area">
          <form>

            <label>
                 Title:
                <input type="text"
                       name="title"
                       value={this.state.title}
                       onChange={this.onChange} />
            </label>
            <br /> <br />

            <label>
                Category:
                <input type="text"
                       name="category"
                       value={this.state.category}
                       onChange={this.onChange} />
            </label>
            <br />
            <label>
                Write New Post:
                <textarea
                       name="description"
                       value={this.state.description}
                       onChange={this.onChange} />
            </label>
            <br />
            <button onClick={this.handleAddInput}>
            <NavLink NavLink exact to="/">
             Save
            </NavLink>
            </button>
            <button onClick={this.handleCancel}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPost;
