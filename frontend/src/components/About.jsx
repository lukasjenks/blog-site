import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../stylesheets/About.css';

export default class About extends Component {
	render() {
		return (
			<Container>
				<Jumbotron>
				  <h2>About</h2>
                  <hr/>
                  <h5>Summary</h5>
                  <p>My name is Lukas Jenks and I love programming. I've been lucky enough to do it professionally for about a year and a half now (since I graduated with my undergrad) and like to explore the variety of things programming can solve (see the Projects tab of this site). </p>
                  <hr/>
                  <h5>Contact</h5>
                  <p>Contact me by email: lukas.jenks@gmail.com</p>
				</Jumbotron>
			</Container>
		);
	}
}
