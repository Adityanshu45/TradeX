import React from "react";
import { holdings } from "../data/data.js";

function Holdings() {
  const currentValue = holdings.reduce((sum, stock) => {
    return sum + stock.qty * stock.price;
  }, 0);

  const totalInvestment = holdings.reduce((sum, stock) => {
    return sum + stock.qty * stock.avg;
  }, 0);

  const profitAndLoss = currentValue - totalInvestment;
  const totalProfitClass = profitAndLoss < 0.0 ? "loss" : "profit";
  const profitAndLossPresent = (profitAndLoss / totalInvestment) * 100;

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
              const currValue = stock.qty * stock.price;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const rowProfitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={rowProfitClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={rowProfitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalProfitClass}>
            {profitAndLoss.toFixed(2)} (
            {totalProfitClass == "profit" ? "+" : ""}
            {profitAndLossPresent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
}

export default Holdings;
