import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../css/index.css';


function tick() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toLocalTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}
setInterval(tick,1000);
