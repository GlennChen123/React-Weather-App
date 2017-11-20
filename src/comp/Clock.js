import React, {Component} from 'react';
//import Toolbar from '../weather/Toolbar.js';

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		// explain 'this' in arrow fn
		this.timerId = setInterval(() => {
			this.tick();
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
		// console.log(this.timerId)
	}

	tick() {
		this.setState({date: new Date()})
	}

	displayTime() {
		return this.state.date.toLocaleString('en-AU', {timeZone: this.props.timeZone});
	}

	handleClick(city) {
		alert(`${city} clicked !`);
		console.log(this.props.city);
	}

	render() {
		const {city} = this.props;
		return (
			
			<span onClick={(e) => this.handleClick(city, e)}>
				Hello <span style={{color:"white"}}>{city}</span>, It's now {this.displayTime()}
			</span>
			
		)
	}
}

// Clock.defaultProps = {
// 	timeZone: 'Australia/Sydney',
// 	city: 'Brisbane'
// }