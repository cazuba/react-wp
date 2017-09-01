import { Component } from 'react';

class Nav extends Component {
	render() {
		return (
			<nav className="main-nav">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/about">Acerca</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
