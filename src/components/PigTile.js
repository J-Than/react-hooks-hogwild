import React from "react";

function PigTile({ hog }) {
	return (
		<div className="pigTile">
			<img src={hog.image} />
			<h3>{hog.name}</h3>
		</div>
	);
}

export default PigTile;
