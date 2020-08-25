import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Tab, Nav} from 'react-bootstrap';
import '../stylesheets/About.css';

export default class Projects extends Component {
	render() {
		return (
            <div style={{marginLeft: 50, marginTop: 50, marginRight: 50, marginBottom: 50}}>
            <h4>Solo Projects</h4>
			<Tab.Container id="left-tabs-example" defaultActiveKey={1}>
			  <Row>
				<Col sm={3}>
				  <Nav variant="pills" className="flex-column">
					<Nav.Item>
					  <Nav.Link eventKey={1}>Unix Utilities</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					  <Nav.Link eventKey={2}>Emacs Distribution</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					  <Nav.Link eventKey={3}>Custom Discord Bot</Nav.Link>
					</Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey={4}>Other Projects</Nav.Link>
					</Nav.Item>
				  </Nav>
				</Col>
				<Col sm={9}>
				  <Tab.Content>
					<Tab.Pane eventKey={1}>
					  <p>A variety of system utilities for unix-like operating systems written in both C and Bash. Examples include a system level utility written in C that monitors and manages processes running on a unix-like OS with w&x memory, and a script written in bash that monitors users on a unix-like OS, and determines how much CPU time they've taken up across their various processes.</p>
                      <p>Source available here: </p>
                      <a href="https://github.com/lukasjenks/unixutilities">https://github.com/lukasjenks/unixutilities</a>
					</Tab.Pane>
					<Tab.Pane eventKey={2}>
					  <p>My personal distribution of emacs including a variety of custom-made plugins. As an example, one plugin, tldr-newsletter, pulls the latest daily tech news from tldrnewsletter.com and renders the retrieved html within emacs. Another example is a plugin that was custom made for Method1 Software's internal "Apex" web framework that allows you to live edit code within the framework itself, which could previously only be done in a web browser.</p>
                      <p>Source available here: </p>
                      <a href="https://github.com/lukasjenks/emacsconfig">https://github.com/lukasjenks/emacsconfig</a>
					</Tab.Pane>
                    <Tab.Pane eventKey={3}>
                      <p>Simple general purpose custom Discord bot created with Node.js/sqlite3. Includes a custom quoting and custom picture/GIF recall system among other things.</p>
                      <p>Source available here:</p>
                      <a href="https://github.com/lukasjenks/davisbot">https://github.com/lukasjenks/davisbot</a>
                    </Tab.Pane>
                    <Tab.Pane eventKey={4}>
                      <p>More solo projects to be listed here soon as I continue with code cleanup and licensing of older code projects. Some projects not listed here can be found on my github page: </p>
                      <a href="https://github.com/lukasjenks">https://github.com/lukasjenks</a>
                    </Tab.Pane>
				  </Tab.Content>
				</Col>
			  </Row>
			</Tab.Container>
            <br/>
            <hr/>
            <br/>
			<h4>Group Projects</h4>
			<Tab.Container id="left-tabs-example" defaultActiveKey={1} style={{marginLeft: 100}}>
			  <Row>
				<Col sm={3}>
				  <Nav variant="pills" className="flex-column">
					<Nav.Item>
					  <Nav.Link eventKey={1}>Alberta Game Jam 2019 Project</Nav.Link>
					</Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey={2}>HackED 2020 Project</Nav.Link>
                    </Nav.Item>
					<Nav.Item>
					  <Nav.Link eventKey={3}>Other Projects</Nav.Link>
					</Nav.Item>
				  </Nav>
				</Col>
				<Col sm={9}>
				  <Tab.Content>
					<Tab.Pane eventKey={1}>
					  <p>Using the Godot game engine, 2 others and myself created a complete 3D horror game. We had no previous experience with the engine which made the process a lot of fun!</p>
                      <p>The game is available for download here:</p>
                      <a href="https://tehzwen.itch.io/the-darkness-beneath">https://tehzwen.itch.io/the-darkness-beneath</a>
					</Tab.Pane>
                    <Tab.Pane eventKey={2}>
                      <p>While participating in a 24 hour hackathon, 2 others and myself created a full stack web application, similar to GasBuddy, in React.js/Golang.</p>
                      <p>Source available here:</p>
                      <a href="https://github.com/CooperWallace/BoozeBuddy">https://github.com/CooperWallace/BoozeBuddy</a>
                    </Tab.Pane>
					<Tab.Pane eventKey={3}>
                      <p>More group projects to be listed here soon as I continue with code cleanup and licensing of older code projects. Some projects not listed here can be found on my github page: </p>
                      <a href="https://github.com/lukasjenks">https://github.com/lukasjenks</a>
					</Tab.Pane>
				  </Tab.Content>
				</Col>
			  </Row>
			</Tab.Container>
            </div>
		);
	}
}
