import React from "react";
import "./Assets.css";
const Assets = () => {
  return (
    <div className="assets-list-container">
      <div className="asset-list-item-container">
        <div className="asset-list-item">
          <div className="left">
            <img src="/zlogo.png" alt="" />
            <div className="amount-info">
              <p className="zil-amt">0 ZIL</p>
              <p className="usd-amt">$0.00 USD</p>
            </div>
          </div>
          <img src="/rightarrow.png" alt="" className="rightarrow" />
        </div>
      </div>
      <div className="asset-list-item-container">
        <div className="asset-list-item">
          <div className="left">
            <img src="/zlogo.png" alt="" />
            <div className="amount-info">
              <p className="zil-amt">0 ZIL</p>
              <p className="usd-amt">$0.00 USD</p>
            </div>
          </div>
          <img src="/rightarrow.png" alt="" className="rightarrow" />
        </div>
      </div>
    </div>
  );
};

export default Assets;
