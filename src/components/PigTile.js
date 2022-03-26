import React, { useState } from "react";
import PigDetails from "./PigDetails";

function PigTile({ hog }) {

	const [details, setDetails] = useState(false)

	const handleClick = event => setDetails(details => details = !details)

	const hogDetails = details ?
		< specialty: "Being incredibly cute",
    greased: false,
    weight: 2.0,
    "highest medal achieved": "bronze",

	return (
		<div className="pigTile" onClick={handleClick}>
			<h3>{hog.name}</h3>
			<img src={hog.image} />
			{ details ? <PigDetails hog={hog} /> : null }
		</div>
	);
}

export default PigTile;
