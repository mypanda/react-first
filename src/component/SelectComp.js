import React,{ Component } from 'react';

class SelectComp extends Component{
	constructor(props){
		super(props);
		this.state = {value:'coconut'};

		//绑定事件
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//自定义事件
	handleChange(event){
		this.setState({value:event.target.value});
	}
	handleSubmit(event){
		console.log('输入的数据是' + this.state.value);
		event.preventDefault();
	}
	//渲染
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					输入的数据:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="mango">芒果</option>
						<option value="lime">酸橙</option>
						<option value="coconut">椰子</option>
					</select>
				</label>
				<input type="submit" value="Submit!" />
			</form>
		);
	}
}

export default SelectComp;