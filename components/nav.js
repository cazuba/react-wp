import { Component } from 'react';
import styled from 'styled-components';
import { Link } from '../routes';

const StyledNav = styled.nav`
	width: 100%;

	ul {
		list-style: none;
		margin: 0 auto;
		max-width: 500px;
		text-align: center;

		li{
			display: inline-block;
			padding:0 10px;

			a {
				text-transform: uppercase;
			}
		}
	}
`;

const A = styled.a`
	color: ${props => props.isHome ? '#85f100' : 'white'} !important;
`;
class Nav extends Component {
	render() {
		return (
			<StyledNav>
				<nav className="main-nav">
					<ul>
						<li>
							<Link href="/">
								<A isHome={ true }>Home</A>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<A>Acerca</A>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<A>Contact</A>
							</Link>
						</li>
						<li>
							<Link
								route="blog"
								params={{ slug: 'quierounabirra.wordpress.com'}}
								href="/blog">
								<A>Blog</A>
							</Link>
						</li>
					</ul>
				</nav>
			</StyledNav>
		);
	}
}

export default Nav;
