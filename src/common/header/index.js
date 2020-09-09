import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="HeaderWrapper">
				
				<div className="logo">ACME Inventory</div>
				<div className="Nav">
				<div className='NavItem' onClick={this.props.showHome}>Home</div>
				</div>
				<div className="Addition">
				<div className='Button reg' onClick={this.props.showCart}>Shop Cart</div>
				</div>
			</div>
		);
	}
}

export default (Header);