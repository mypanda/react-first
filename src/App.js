import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <Menu />
      </div>
    );
  }
}

class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      author:'panda'
    }
    //绑定函数
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //定义函数
  handleSubmit(event){
    event.preventDefault();
    alert(this.state.author);
  }
  handleChange(event){
    event.preventDefault();
    this.setState({author:event.target.value.toUpperCase()})
  }
  //生命周期函数
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  //渲染
  render(){
    //缓存一下下
    const author = this.state.author;
    return (
      <div className="menu">
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label><br />
          <label><input type="text" value={author} onChange={this.handleChange} /></label><br />
          <input type="submit" value="Submit!" />
        </form>
      </div>
    );
  }
}

export default App;
