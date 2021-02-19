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
                  <p>My name is Lukas Jenks and I love programming. I've been lucky enough to do it professionally for two years now at Method1 Enterprise Software (since I graduated with my B.Sc. from MacEwan University), and like to explore the variety of things programming can solve (see the "Projects" tab of this site).</p>
                  <hr/>
				  <h5>This Site</h5>
				  <p>For those curious, this simple site was made in
				  React.js/Golang, probably my favourite combination
				  for full-stack web dev. It's hosted on my DigitalOcean
				  server, along with a few other sites I've made using
				  an nginx reverse proxy. Here's the source for this
				  site if you're interested in making one like it:
				  </p>
				  <a href="https://github.com/lukasjenks/blog-site">
				  https://github.com/lukasjenks/blog-site
				  </a>
				  <hr/>
				  <h5>Links</h5>
				  <p>My Github:</p>
				  <a href="https://github.com/lukas[<0;53;34M]jenks">
				  https://github.com/lukasjenks
				  </a>
				  <p>My LinkedIn:</p>
				  <a href="https://linkedin.com/in/lukasjenks">
				  https://linkedin.com/in/lukasjenks
				  </a>
				  <hr/>
                  <h5>Contact</h5>
                  <p>Contact me by email: </p>
				  <a href="mailto:lukas.jenks@gmail.com">lukas.jenks@gmail.com</a>
				</Jumbotron>
			</Container>
		);
	}
}
