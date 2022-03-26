import React, { useState } from "react";
import Nav from "./Nav";
import PigGrid from "./PigGrid";

import hogs from "../porkers_data";

function App() {

	const [sort, setSort] = useState("None");
	const [filter, setFilter] = useState("All");

	const handleSort = (event) => {
		if (event.target.name==='filter') {
			setFilter(filter => filter = event.target.value)
		} else {
			setSort(sort => sort = event.target.value)
		}
	}

	const filteredHogs = filter==="All" ? [...hogs] : 
		hogs.filter(hog => filter==="Greased" ? hog.greased : !hog.greased);

	if (sort!=="None") {
		filteredHogs.sort(function(a,b) {
			if (sort!=="Medal") {
				if (a[sort.toLowerCase()] < b[sort.toLowerCase()]) {
					return -1
				} else {
					return 1
				}
			} else {
				const medalSort = ['diamond', 'platinum', 'gold', 'silver', 'bronze', 'wood'];
				return medalSort.indexOf(a["highest medal achieved"]) - medalSort.indexOf(b["highest medal achieved"])
			}
		})
	}
	
	return (
		<div className="App">
			<Nav handleSort={handleSort} />
			<PigGrid hogs={filteredHogs}/>
		</div>
	);
}

export default App;
