import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import '../stylesheets/Home.css';

export default class Home extends Component {
	render() {
		return (
			<Container>
				<Jumbotron>
					<h2>Welcome!</h2>
					<p>My name is Lukas Jenks and I'm a software engineer and web developer based in Edmonton, Alberta.
					This is my personal blog/portfolio site.</p>
				</Jumbotron>
				<Link to="/about">
					<Button bsStyle="primary">About</Button>
				</Link>
			</Container>
		);
	}
}
