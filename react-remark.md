```

https://facebook.github.io/react/docs/jsx-in-depth.html

//es6的写法
function App2(){
  const props = {first:'li',last:'panda'};
  return <App {...props} />
}


//在渲染的地方也可以写函数
function Repeat(props){
  let items = [];
  for(let i = 0;i<props.numTimes;i++){
    items.push(props.children(i))
  }
  return <div>{items}</div>
}

ReactDOM.render(
  <Repeat numTimes={10}>
    {(index) => <div key={index}>this is item {index} in the list </div>}
  </Repeat>,
  document.getElementById('root')
);


//用&&
<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>

//函数
<div>
  My JavaScript variable is {String(myVariable)}.
</div>



https://facebook.github.io/react/docs/typechecking-with-proptypes.html

//props.name限制数据类型
import PropTypes from 'prop-types'

class Greeting extendes React.Component{
  render(){
    return (
      <h1>Hello,{this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name:'PropTypes.string'
}

//Requiring Single Child这个是什么
import PropTypes from 'prop-types'
class MyComponent extends React.Component{
  render(){
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
  children:PropTypes.element.isRequired
}


//props默认值
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.defaultProps = {
  name:'panda'
}


//ref
https://facebook.github.io/react/docs/refs-and-the-dom.html
http://bbs.reactnative.cn/topic/608/%E5%AF%B9%E7%BB%84%E4%BB%B6%E7%9A%84%E5%BC%95%E7%94%A8-refs/2

/*********************/
获取当前DOM，或者虚拟DOM,获取一个React组件的引用,官网可以在看看，没有看完，

return <div></div>
return <App></App>

var DOM = ReactDOM.render(<div></div>,document.getElementById('root'))
var VirtualDOM(Object) = ReactDOM.render(<App></App>,document.getElementById('root'))


ES5
render() {
  return (
    <TextInput
      ref={function(input) {
        if (input != null) {
          input.focus();
        }
      }} />
  );
}

ES6
render() {
  return <TextInput ref={(c) => this._input = c} />;
}
componentDidMount() {
  this._input.focus();
}

/*********************/

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}






https://facebook.github.io/react/docs/uncontrolled-components.html

//无状态组件,就是没有数据被
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//无状态默认值
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="Bob"
          type="text"
          ref={(input) => this.input = input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```