import React, { useState } from "react";
import "./AssetsAndActivity.css";
const AssetsAndActivity = () => {
  const [currentTab, setCurrentTab] = useState("assets");
  return (
    <div className="main-container">
      <div className="wrapper">
        <div className="tabs">
          <div
            className={currentTab === "assets" ? "tab active-tab" : "tab"}
            onClick={() => setCurrentTab(() => "assets")}
          >
            Assets
          </div>
          <div
            className={currentTab === "activity" ? "tab active-tab" : "tab"}
            onClick={() => setCurrentTab(() => "activity")}
          >
            Activity
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsAndActivity;
