import React from "react";

class Post extends React.Component {

	message = "";

	constructor(props) {
		super();
		this.state = "";
		this.messageChange = this.messageChange.bind(this);
		this.addReply = this.addReply.bind(this);
	}

	addReply() {
		fetch('http:///localhost:8080/posts/' + this.props.item.postId + 
									'/user/' + this.props.userId +
									'/message/' + this.state.value).then(response => {
			this.setState({value: ''});
		});
	}

	messageChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		const messages = this.props.item.comments.map(g => 
			(<p key={JSON.stringify(g)} className="card-text"><b>{g.userId}</b> | {g.time}<br />
			{g.message}</p>)
		);
		return (
			<div className="row">
				<div className="col-3 ns-pad-top-10"></div>
				<div className="col-6 ns-pad-top-10"> 
					<div className="card"> 
						<div className="card-body"> 
							<h5 className="card-title">{this.props.item.userId}</h5> 
							<p className="card-footer">{this.props.item.body}</p>
							<u>Comments</u>:<br />
							<input value={this.state.value}
									onChange={this.messageChange} 
									style={{width: '88%'}}/>
							<button onClick={this.addReply}>Reply</button>
							{messages}
							<hr />
						</div> 
					</div> 
				</div>
				<div className="col-3 ns-pad-top-10"></div>
			</div>
		);
	}
}

export default Post;