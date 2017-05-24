import React,{ Component } from 'react';

function Contacts() {
	return <div className="Contacts" />;
}
function Chat() {
	return <div className="Chat" />;
}


/********************************* 这个也是一个准换成简单的方法 *********************************/
/*
<component left={ <Left /> } />
left={ <Left />

使用{props.left}可以替换成

function Left(){}该输出的
*/
function SplitPance(props) {
	return (
		<div className="SplitPance">
			<div className="SplitPance-left">
				{props.left}
			</div>
			<div className="SplitPance-right">
				{props.right}
			</div>
		</div>
	);
}
class CompositionInheritance2 extends Component{
	render(){
		return (
			<SplitPance 
				left={
					<Contacts />
				}
				right={
					<Chat />
				} />
		);
	}
}

export default CompositionInheritance2;

/*
function Dialog(props) {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
		</FancyBorder>
	);
}

function WelcomeDialog(){
	<Dialog 
		title="Welcome"
		message="lorem lorem lorem lorem lorem lorem lorem"/>
}*/



/*

function Dialog(props){
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.title}
			</p>
			{props.children}
		</FancyBorder>
	);
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }
  //自定义函数
  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
  //渲染
  render(){
		return (
			<Dialog title="Mars Exploration Program
							message="How should we refer to you?">
				<input value={this.state.login}
	             onChange={this.handleChange} />
	      <button onClick={this.handleSignUp}>
	        Sign Me Up!
	      </button>
			</Dialog>
		);
  }
 }


 */