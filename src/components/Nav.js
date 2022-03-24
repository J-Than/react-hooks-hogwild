import React from "react";
import piggy from "../assets/porco.png";
import SortButtons from "./SortButtons";

const Nav = ({ handleSort }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<SortButtons handleSort={handleSort} />
		</div>
	);
};

export default Nav;
