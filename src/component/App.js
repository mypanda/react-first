import React, { Component } from 'react';

import Menu from './Menu';
import SelectComp from './SelectComp';
import Multiple from './Multiple';
import LiftState from './LiftState';
import LiftState1 from './LiftState1';
import LiftState2 from './LiftState2';
import CompositionInheritance from './CompositionInheritance';

import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<p><a href="https://facebook.github.io/react/docs/hello-world.html">官网</a></p>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr className="border-color-red" />
        <p>表单的方式</p>
        <Menu />
        <hr className="border-color-red" />
        <p>下拉列表</p>
        <SelectComp />
        <hr className="border-color-red" />
        <p>多个选择,共用一个函数</p>
        <Multiple />
        <hr className="border-color-red" />
        <p>提升状态</p>
        <LiftState />
        <hr className="border-color-red" />
        <p>提升状态1，两个相同的component</p>
        <LiftState1 />
        <hr className="border-color-red" />
        <p>提升状态2，这个是复杂一点的继续上面的例子</p>
        <LiftState2 />
        <hr className="border-color-red" />
        <p>Composition vs Inheritance 1</p>
        <CompositionInheritance />
        <hr className="border-color-red" />
        <p>Composition vs Inheritance 2 可以分开加载自己的component</p>
        <CompositionInheritance />
      </div>
    );
  }
}

export default App;
