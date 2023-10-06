import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioList, onStockCardClick }) {
  const stocksToDisplay = portfolioList.map(stock => {
    return <Stock key={stock.id}
                  id={stock.id}
                  name={stock.name}
                  price={stock.price}
                  onStockCardClick={onStockCardClick}
    />
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksToDisplay}
    </div>
  );
}

export default PortfolioContainer;
