import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    title: '',
    body: '',
    posts: []
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
  
    this.setState({ 
      [name]: value 
    });
  };

  // handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // };

  render() {
    console.log('State: ', this.state);
    // JSX
    return (
      <div>
        <h2>Welcome to my Blog app</h2>
        <form>
        <div className="form-input">
        <input 
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              // onChange={(e) => console.log(e.target.value)}
              onChange={this.handleChange}


            />
        </div>
        <div className="form-input"></div>
        <textarea
              placeholder="body"
              name="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange}
            >
            </textarea>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default App;