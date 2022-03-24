import React from "react";

const SortButtons = ({ handleSort }) => {

	return (
		<div className="SortButtons">
      <select name="sort" onChange={handleSort}>
        <option value="None">Choose a sort order</option>
        <option value="Name">Sort by Name</option>
        <option value="Weight">Sort by Weight</option>
        <option value="Specialty">Sort by Specialty</option>
        <option value="Medal">Sort by Highest Medal Achieved</option>
      </select>
      <select name="greased" onChange={handleSort}>
        <option value="All">Display All</option>
        <option value="Greased">Display Greased Hogs Only</option>
        <option value="Ungreased">Display Ungreased Hogs Only</option>
      </select>
		</div>
	);
};

export default SortButtons;
