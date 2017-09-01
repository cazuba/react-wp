import { Component } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainStyled = styled.div`
	background-color: crimson;
	color: white;
	margin-top: -16px;
	margin-left: -8px;
	margin-right: -8px;
	padding: 20px 10px;

	* {
		font-family: "Verdana";
		font-size: 14px;
	}

	a {
		color: white;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}

	nav {
		width: 100%;

		ul {
			list-style: none;
			margin: 0 auto;
			max-width: 500px;
			text-align: center;

			li{
				display: inline-block;
				padding:0 10px;
			}
		}
	}

	.container {
		margin: 10px;
	}
	footer {
		text-align: center;
	}
`;
//export class main extents Component {
class Main extends Component {
	static porpTypes = {
		title: PropTypes.string
	};

	static defaultProps = {
		title: 'San José 2017'
	};

	render() {
		return (
			<MainStyled>
				<Head>
					<title>{ this.props.title }</title>
				</Head>

				<Nav></Nav>

				<div className="container">
					{ this.props.children }
				</div>

				<footer>
					<div><a href="#">San José workshop 2017</a></div>
				</footer>
			</MainStyled>
		);
	}
}

export default Main;
