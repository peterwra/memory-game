//sets up the reusable Jumbotron component
// import React from "react";
import React, { Component } from "react";
import "./Jumbotron.css";

/* 
const Jumbotron = () => (
	<header className = "header">
		<h1>Island Memory Game</h1>
		<h2>Click on images you haven't clicked on yet to get a point. If you click on all 12 pictures, you win.</h2>
	</header>
);
*/

class Jumbotron extends Component {
	render() {
		return (
			<header className="header">
				<h1>Island Memory Game</h1>
				<h2>Click on images you haven't clicked on yet to get a point. If you click on all 12 pictures, you win.</h2>
				<h2>Score: {this.props.score}</h2>
				<h2>High Score: {this.props.highScore}</h2>
			</header>
		);
	}
}

export default Jumbotron;