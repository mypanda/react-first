import React,{ Component } from 'react';

const scaleNames = {
	c:'Celsius',
	f:'Fahrenheit'
}

class TemperatureInput extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {temperature:''};
	}

	handleChange(event){
		this.setState({temperature:event.target.value});
	}

	render(){
		const temperature = this.state.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>输入这里面的一个:{scaleNames[scale]}</legend>
				<input value={temperature} 
				onChange={this.handleChange} />
			</fieldset>
		);
	}
}
class LiftState1 extends Component{
	render(){
		return (
			<div>
				<TemperatureInput scale="c" />
				<TemperatureInput scale="f" />
			</div>
		);
	}
}

export default LiftState1;