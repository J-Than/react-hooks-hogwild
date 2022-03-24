import React, { useState } from "react";
import Nav from "./Nav";
import PigGrid from "./PigGrid";

import hogs from "../porkers_data";

function App() {

	const handleSort = () => {
		console.log('Selected something')
	}

	return (
		<div className="App">
			<Nav handleSort={handleSort} />
			<PigGrid />
		</div>
	);
}

export default App;
