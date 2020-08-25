import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Grid, Image, Button, Tab, Nav} from 'react-bootstrap';
import blogdata from './blog_entries.json';
import '../stylesheets/About.css';

export default class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            validYears: [],
            selectedYear: null,
            selectedMonth: null,
            selectedDay: null
        };
    }

    componentDidMount() {
        this.setState({ entries: blogdata });
        var validYears = [];
        for (var entry of blogdata) {
            let year = entry.date.split("-")[0];
            if (validYears.indexOf(year) === -1) {
                validYears.push(year);
            }
        }
        this.setState({ validYears: validYears });
        // Auto-select max year by default
        this.setState({ selectedYear: Math.max.apply(null, validYears)});
    }

    getYears = () => {
        return this.state.validYears.map((year, index) => {
            return (
                <Nav.Item key={year}>
                    <Nav.Link eventKey={year}>{year}</Nav.Link>
                </Nav.Item>
            );
        });
    }

    getMonths = () => {
        let validMonths = [];
        for (var entry of this.state.entries) {
            let dateArray = entry.date.split("-");
            if (dateArray[0] === this.state.selectedYear) {
                if (validMonths.indexOf(dateArray[1]) === -1) {
                    validMonths.push(dateArray[1]);
                }
            }
        }
        return validMonths.map((month, index) => {
            return (
                <Nav.Item key={month}>
                  <Nav.Link eventKey={index}>{month}</Nav.Link>
                </Nav.Item>
            );
        });
    }

    getDays = () => {
        
    }

    render() {
        if (this.state.validYears && this.state.validYears.length > 0) {
            return (
                <div style={{ marginLeft: 50, marginTop: 50, marginRight: 50, marginBottom: 50 }}>
                        <Row>
                            <Col sm={1}>
                                <Nav variant="pills" className="flex-column" defaultActiveKey={this.state.selectedYear} onSelect={(selectedYear) => this.setState({selectedYear: selectedYear})}>
                                    {this.getYears()}
                                </Nav>
                            </Col>
                            <Col sm={1}>
								<Nav variant="pills" className="flex-column" defaultActiveKey={0} onSelect={(selectedMonth) => this.setState({selectedMonth: selectedMonth})}>
									{this.state.selectedYear !== null ? this.getMonths() : null}
								</Nav>
                            </Col>
							<Col sm = {1}>
								<Nav variant="pills" className="flex-column" defaultActiveKey={0} onSelect={(selectedDay) => this.setState({selectedDay: selectedDay})}>
									{this.state.selectedMonth !== null ? this.getDays(): null}
                                </Nav>
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
