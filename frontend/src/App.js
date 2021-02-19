import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Navbar from './components/CustomNavBar';
import Footer from './components/Footer.jsx';

function App() {
  return (
		<Router>
		  <div>
			<Navbar />
			<Switch>
			<Route exact path="/" render={(routeProps) => (<Home {...routeProps} />)} />
			<Route exact path="/about" render={(routeProps) => (<About {...routeProps} />)} />
			<Route exact path="/projects" render={(routeProps) => (<Projects {...routeProps} />)} />
			<Route exact path="/blog" render={(routeProps) => (<Blog {...routeProps} />)} />
			</Switch>
			<Footer />
		  </div>
		</Router>
  );
}

export default App;
