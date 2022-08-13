import React from "react";
import "./Activity.css";
const Assets = () => {
  return (
    <div className="activity-list-container">
      <div className="activity-list-item-container">
        <div className="activity-list-item">
          <div className="left">
            <img src="/cyclered.png" alt="" />
            <div className="amount-info">
              <p className="contract-interaction">Contract interaction</p>
              <p className="date">June 7</p>
            </div>
          </div>
          <div className="right">-0 ZIL</div>
        </div>
      </div>
      <div className="activity-list-item-container">
        <div className="activity-list-item">
          <div className="left">
            <img src="/cyclegreen.png" alt="" />
            <div className="amount-info">
              <p className="contract-interaction">Contract information</p>
              <p className="date">June 7</p>
            </div>
          </div>
          <div className="right">0 ZIL</div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
