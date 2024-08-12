import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [pax, setPax] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    console.log(
      `Searching for ${pax} people, at ${location} from ${startDate} to ${endDate}`
    );
  };

  return (
    <div className="searchBarContainer">
      <div className="searchBarWrapper">
        <div className="searchBarSearch">
          <h3 className="sbTitle">Book Your Stay</h3>
          <div className="sbItem">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter a location"
            />
          </div>
          <div className="sbItem">
            <label htmlFor="pax">Pax</label>
            <input
              type="number"
              id="pax"
              value={pax}
              onChange={(e) => setPax(e.target.value)}
              min="1"
              placeholder="Number of people"
            />
          </div>
          <div className="sbItem">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="sbItem">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button className="searchBarSearchButton" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="searchBarResult">
          {/* Optional: Add content for search results here */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
