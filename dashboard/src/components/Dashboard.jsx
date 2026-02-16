import React from "react";
import { Routes, Route } from "react-router-dom";
import WatchList from "./WatchList.jsx";
import Summary from "./Summary.jsx";
import Orders from "./Orders.jsx";
import Holdings from "./Holdings.jsx";
import Positions from "./Positions.jsx";
import Funds from "./Funds.jsx";
import Apps from "./Apps.jsx";
import BuyActionWindow from "./BuyActionWindow.jsx";
import { GeneralContextProvider } from "./GeneralContext.jsx";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<BuyActionWindow />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
