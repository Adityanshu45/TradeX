import React from "react";
import { positions } from "../data/data";

function Positions() {
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const currValue = stock.qty * stock.price;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={index}>
                  <th>{stock.product}</th>
                  <th>{stock.name}</th>
                  <th>{stock.qty}</th>
                  <th>{stock.avg.toFixed(2)}</th>
                  <th>{stock.price.toFixed(2)}</th>
                  <td className={profitClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Positions;
