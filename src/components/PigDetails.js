import React from "react";

function PigDetails({ hog }) {

	return (
		<div className="pigDetails">
      <p>Specialty: {hog.specialty}</p>
      <p>Greased?: {hog.greased ? 'Yes' : 'No'}</p>
      <p>Weight: {hog.weight} kg</p>
      <p>Highest medal achieved: {hog['highest medal achieved']}</p>
		</div>
	);
}

export default PigDetails;
