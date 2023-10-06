import React from "react";
import Stock from "./Stock";

function StockContainer({ filteredList, onStockCardClick }) {

  const stocksToDisplay = filteredList.map(stock => {
    return <Stock key={stock.id}
                  id={stock.id}
                  name={stock.name} 
                  price={stock.price}
                  onStockCardClick={onStockCardClick} 
    />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
