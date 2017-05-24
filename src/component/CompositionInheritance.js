import React,{ Component } from 'react';

function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
	);
}

function WelcomeDialog() {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				Welcome
			</h1>
			<p className="Dialog-message">
				Thank you for visiting our spacecraft!
			</p>
		</FancyBorder>
	);
}

class CompositionInheritance extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<WelcomeDialog />
		);
	}
}

export default CompositionInheritance;