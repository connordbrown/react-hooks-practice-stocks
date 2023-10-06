import React, { useState } from "react";

function SearchBar({ stockList, filteredList, setFilteredList }) {
  const [isAlphabet, setIsAlphabet] = useState(false);
  const [isPrice, setIsPrice] = useState(false);

  function handleSort() {
    let sortList;
    if (isAlphabet) {
      setIsAlphabet(false);
      setIsPrice(true);
      sortList = filteredList.toSorted((a, b) => {
        return a.price - b.price;
      })
    } else {
      setIsAlphabet(true);
      setIsPrice(false);
      sortList = filteredList.toSorted((a, b) => {
        return a.name.localeCompare(b.name);
      })
    }
    setFilteredList(sortList);
  }

  function handleFilter(e) {
    const filteredStocks = stockList.filter(stock => {
      return stock.type === e.target.value;
    })
    setFilteredList(filteredStocks);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={isAlphabet}
          onChange={handleSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={isPrice}
          onChange={handleSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
