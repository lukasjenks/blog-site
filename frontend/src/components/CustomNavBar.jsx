import React, { Component } from 'react';
import { Navbar, Nav, Brand } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import '../stylesheets/CustomNavBar.css';
import logo from './softwareicontransparent.png';

class CustomNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
			entries: []
        };
        this.getBlogEntries();
    }

    getBlogEntries = () => {
        
    }

	render() {
        return (
			<Navbar default collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/">
			    <img
                  src={logo}
			      width="30"
			      height="30"/>
			  </Navbar.Brand >
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
                  <Nav.Link active={this.props.location.pathname === "/" ? true : false} as={Link} to="/">Home</Nav.Link>
				  <Nav.Link active={this.props.location.pathname === "/about" ? true : false} as={Link} to="/about">About</Nav.Link>
				  <Nav.Link active={this.props.location.pathname === "/projects" ? true : false} as={Link} to="/projects">Projects</Nav.Link>
                  <Nav.Link active={this.props.location.pathname === "/blog" ? true : false} as={Link} to="/blog">Blog</Nav.Link>
				</Nav>
			  </Navbar.Collapse>
			</Navbar>
		);
	}
}

export default withRouter(CustomNavBar);
