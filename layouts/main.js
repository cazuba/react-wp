import { Component } from 'react';

//export class main extents Component {
class Main extends Component {
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}

export default Main;
