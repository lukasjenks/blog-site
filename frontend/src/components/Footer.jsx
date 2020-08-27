import React, { Component } from 'react';
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

	render() {
		return(
			<div className="fixed-bottom" style={{marginTop: "15", marginBottom: "0"}}>
				<Navbar default collapseOnSelect bg="dark" variant="dark">
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
						<Navbar.Text>Lukas Jenks Ⓒ Copyright 2020. All rights reserved.</Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
    }
}

export default Footer;
