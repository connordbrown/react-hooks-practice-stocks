import React from "react";

function Stock({ id, name, price, onStockCardClick }) {
  return (
    <div>
      <div className="card" onClick={() => onStockCardClick(id)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
