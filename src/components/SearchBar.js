import React, { useState } from "react";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search-cont">
      <div className="searchInputs">
        <input
          className="search-bar"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length != 0 && (
        <div className="result-item">
          {Data.slice(0, 3).map((value, key) => {
            return (
              <div className="item-box">
                <div>
                  <a href={value.link} target="_blank">
                    {value.title}
                  </a>
                </div>
                <div className="result-item">
                  <img className="filterImg" src={filterImg} />${value.year}k+ /{" "}
                  {value.pages} Beds / {value.pages}Appt. ... 3 more
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
