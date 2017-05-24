import React, { Component } from 'react';
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
export default Menu;