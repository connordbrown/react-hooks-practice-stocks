import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);
  const [stockIdList, setStockIdList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(response => response.json())
    .then(data => setStockList(data))
  }, [])

  useEffect(() => {
    setFilteredList(stockList);
  }, [stockList])

  function handleStockPurchase(stockId) {
    if (stockIdList.includes(stockId)) {
      return;
    } else {
      const stockToAdd = stockList.find(stock => {
        return stock.id === stockId;
      })
      setStockIdList([...stockIdList, stockId]);
      setPortfolioList([...portfolioList, stockToAdd]);
    }
  }

  function handleStockSale(stockId) {
    const stocksAfterSale = portfolioList.filter(stock => {
      return stock.id !== stockId;
    })
    const updatedStockIdList = stockIdList.filter(id => {
      return id !== stockId;
    })
    setPortfolioList(stocksAfterSale);
    setStockIdList(updatedStockIdList);
  }

  return (
    <div>
      <SearchBar stockList={stockList} filteredList={filteredList} setFilteredList={setFilteredList} />
      <div className="row">
        <div className="col-8">
          <StockContainer filteredList={filteredList} onStockCardClick={handleStockPurchase} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} onStockCardClick={handleStockSale} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
