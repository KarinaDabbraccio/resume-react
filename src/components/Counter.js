import React, { Component } from 'react';

class Counter extends Component {

	state = {
		count: 0,
		imageUrl: "https://picsum.photos/50"
	};

	render() {
		return (
			<div>
				<img src={ this.state.imageUrl } alt="Random image"></img>
				<span className="badge badge-primary m-2">{ this.formatCount() }</span>
				<button className="btn btn-secondary btn-sm">Increnment</button>
			</div>
        );
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;