import React, { useState } from "react";
import icon from "../re/Ellipse.png";
import Data from "../Data.json";
import filterImg from "../re/Filter 16px.png";
import "./search-bar.css";

export default function Search() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = Data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search-cont">
      <div className="search-input">
        <div className="bar-cont">
          <img src={icon} className="search-icon" alt="" />
          <input
            type="text"
            className="search-bar"
            placeholder="Search for address"
            value={wordEntered}
            onChange={handleFilter}
          ></input>
        </div>

        <div>
          <button className="btn">Search</button>
        </div>
      </div>
      <div className="search-result">
        {filteredData.slice(0, 3).map((value, key) => {
          return (
            <div className="item-box">
              <div>
                <a href={value.link} target="_blank">
                  {value.title}
                </a>
              </div>
              <div className="result-item">
                <img className="filterImg" src={filterImg} alt="" />$
                {value.year}k+ / {value.pages} Beds / {value.pages}Appt. ... 3
                more
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
