import React,{ Component } from 'react';

//其它小的component在这里
function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>数值大于等于100了</p>
	}
	return <p>数值小于100</p>
}

class LiftState extends Component{
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
		return (
			<fieldset>
				<legend>输入一个数值:</legend>
				<input 
					value={temperature}
					onChange={this.handleChange} />
				<BoilingVerdict 
					celsius={parseFloat(temperature)} />
			</fieldset>
		);
	}
}

export default LiftState;