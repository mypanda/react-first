import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger</h1>
}
const user = {
  firstName:'li',
  lastName:'panda'
}

// JSX
const element = (
  <div>
    <h1>
      hello ,{formatName(user)}!
    </h1>
    <div>
      {getGreeting(user)}
    </div>
  </div>
);
const element1 = <div tabIndex="0"></div>;
const element2 = <img src={user.avatarUrl}></img>;
const element3 = <img src={user.avatarUrl} />
const element4_1 = (
  <h1 className="greeting">
    Hello, World!
  </h1>
);
const element4_2 = React.createElement(
  'h1',
  {className:'greeting'},
  'Hello, World!'
);
const element4_3 = {
  type:'h1',
  props:{
    className:'greting',
    childred:'Hello, World!'
  }
}
// JSX


ReactDOM.render(
  element,
  document.getElementById('root')
);
