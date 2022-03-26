import React from "react";
import PigTile from "./PigTile";

function PigGrid({ hogs }) {
	return (
		<div className="PigGrid">
			{hogs.map(hog => <PigTile key={hog.name} hog={hog} />)}
		</div>
	);
}

export default PigGrid;
