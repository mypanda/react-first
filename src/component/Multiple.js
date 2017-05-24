import React,{ Component } from 'react';

class Multiple extends Component{
	constructor(props){
		super(props);
		this.state = {
			isGoing:true,
			numberOfGuests:2
		};

		//绑定事件
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	//自定义事件
	handleInputChange(event){
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]:value
		});

		//这里的写法相当于es5
		// var partialState = {};
		// partialState[name] = value;
		// this.setState(partialState);
	}
	//渲染
	render(){
		return (
			<form>
				<label>
					Is going:
					<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
				</label>
				<br />
				<label>
					Number of guests:
					<input name="numberOfGuests" type="number" checked={this.state.numberOfGuests} onChange={this.handleInputChange} />
				</label>
			</form>
		);
	}
}

export default Multiple;