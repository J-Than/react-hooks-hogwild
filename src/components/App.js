import React, { useState } from "react";
import Nav from "./Nav";
import PigGrid from "./PigGrid";

import hogs from "../porkers_data";

function App() {

	const [sort, setSort] = useState("None");
	const [filter, setFilter] = useState("All");

	const handleSort = (event) => {
		console.log(`Sorting by ${event.target.value}`)
	}

	return (
		<div className="App">
			<Nav handleSort={handleSort} />
			<PigGrid hogs={hogs}/>
		</div>
	);
}

export default App;
