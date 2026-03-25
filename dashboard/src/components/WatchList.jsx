import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Tooltip, Grow, formControlClasses } from "@mui/material";
// import { watchlist } from "../data/data";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GeneralContext from "./GeneralContext";

function WatchList() {
  const [allWatchList, setAllWatchlist] = useState([]);
  // Fetch watchlist data  when component load
  useEffect(() => {
    axios.get("http://localhost:8080/allWatchlist").then((res) => {
      // Update state with API response
      setAllWatchlist(res.data);
    }, []);
  });

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{allWatchList.length} / 50</span>
      </div>

      <ul className="list">
        {allWatchList.map((stock, index) => (
          <WatchlistItem key={index} stock={stock} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default WatchList;

//create a watchList component and we dont need to require this

const WatchlistItem = ({ stock, index }) => {
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistAction(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span className="percent">{stock.price}</span>
        </div>
      </div>
      {showWatchlistAction && <WatchlistActions uuid={stock.name} />}
    </li>
  );
};

const WatchlistActions = ({ uuid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uuid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uuid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">buy</button>
        </Tooltip>
        <Tooltip
          title="Sell(S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHorizIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
