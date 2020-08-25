import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Grid, Image, Button, Tab, Nav} from 'react-bootstrap';
import blogdata from '../blog_entries.json';
import '../stylesheets/Blog.css';

export default class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            selectedDate: null,
            selectedEntry: null
        };
    }

    componentDidMount() {
        this.setState({ entries: blogdata });
        this.setState({ selectedDate: blogdata[0].date });
        this.setState({ selectedEntry: blogdata[0] });
    }

    toggleSelectedDate = (selectedDate) => {
        this.setState({ selectedDate: selectedDate });
        for (let entry of this.state.entries) {
            if (entry.date === selectedDate) {
                this.setState({ selectedEntry: entry});
            }
        }
    }


    getDates = () => {
        let validDates = [];
        for (var entry of this.state.entries) {
            validDates.push(entry.date);
        }
        return validDates.map((date, index) => {
            return (
                <Nav.Item key={date}>
                    <Nav.Link eventKey={date}>{new Date(date).toDateString()}</Nav.Link>
                </Nav.Item>
            );
        });
    }

    getVideos = () => {
        let videoUrls = [];
        if (this.state.selectedEntry.media &&
            this.state.selectedEntry.media.videos &&
			this.state.selectedEntry.media.videos.length > 0) {
            for (let videoUrl of this.state.selectedEntry.media.videos) {
                videoUrls.push(videoUrl);
            }
        }
        return videoUrls.map((videoUrl, index) => {
            return (
                <ReactPlayer url={videoUrl}/>
            );
        });
    }

    render() {
        if (this.state.entries && this.state.entries.length > 0) {
            return (
                <div style={{ marginLeft: 50, marginTop: 50, marginRight: 50, marginBottom: 50 }}>
						<hr/>
						<Row>
							<Col sm={2}>
								<h4>Date</h4>
                            </Col>
							<Col sm={10}>
								<h4>Entry</h4>
                            </Col>
                        </Row>
						<hr/>
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column" defaultActiveKey={this.state.selectedDate} onSelect={(selectedDate) => this.toggleSelectedDate(selectedDate)}>
                                    {this.getDates()}
                                </Nav>
                            </Col>
                            <Col sm={10}>
								<p style={{marginBottom: "10px"}}>
								{this.state.selectedEntry.entryText}
								</p>
								<br/>
								{this.getVideos()}
								<br/>
                            </Col>
                        </Row>
                </div>
            );
        } else {
            return (
                <div>
                    Loading....
                </div>
            );
        }

    }
}
