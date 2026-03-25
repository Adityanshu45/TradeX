import React, { useState, createContext } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; //i

const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {}, //c
  closeSellWindow: () => {}, //d
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); //e
  const [selectedSellStockUID, setSelectedSellStockUID] = useState(""); //f

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    //g
    setIsSellWindowOpen(true);
    setSelectedSellStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    //h
    setIsSellWindowOpen(false);
    setSelectedSellStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow, //a
        closeSellWindow: handleCloseSellWindow, //b
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedSellStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
