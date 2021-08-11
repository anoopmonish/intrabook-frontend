import React from "react";

class Inaugration extends React.Component {

	constructor() {
		console.log('constructor is called');
		super();
		this.state = {count: 5};
		this.attend = this.attend.bind(this);
	}

	render() {
		console.log('render is called');
		return (
			<div className="col-8"> 
				<div className="card">
					<h4>Our restaurant inaugrates on Sept 1st. Will you join us for the celebration.</h4>
					<h6>No of attendees: {this.state.count}</h6>
					<button className="button" onClick={this.attend}>I will attend</button>
				</div> 
			</div>
		);
	}

	// {count: 5} -> {count: 6} -> {count: 7} -> {count: 8}

	componentDidMount() { // First time onload
		console.log('componentDidMount is called');
	}

	attend() {
		console.log('attend is called');
		this.setState(prev => { // something has changed
			return {
				count: prev.count + 1
			};
		});
	}

	shouldComponentUpdate() {
		console.log('shouldComponentUpdate is called');
		if (this.state.count >= 10) {
			alert('Sorry! We are all booked');
			return false;
		} else {
			return true;
		}
	}

	componentDidUpdate() { // Will be automatically called if your component re renders
		console.log('componentDidUpdate is called');
		alert('Booking Successfully done!');
	}


}

export default Inaugration;