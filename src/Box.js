import React from "react";

class Box extends React.Component {

	constructor(props) {
		super();
		this.state = props;
	}

	render() {
		return (
			<div className="col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 ns-pad-top-10"> 
				<div className="card"> 
					<img className="card-img-top" alt="NA" src={this.props.image} /> 
					<div className="card-body"> 
						<h5 className="card-title">{this.props.title}</h5> 
						<p className="card-text">{this.props.text}</p> 
						<p className="card-footer">{this.props.price}</p> 
					</div> 
				</div> 
			</div>
		);
	}
}

export default Box;