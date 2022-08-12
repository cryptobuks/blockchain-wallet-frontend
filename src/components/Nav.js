import "./Nav.css";
import { useState } from "react";
const Nav = ({ setShowSidebar }) => {
  const [showCopiedButton, setShowCopiedButton] = useState(false);
  const handleCopyClick = () => {
    setShowCopiedButton(() => true);
    setTimeout(() => {
      setShowCopiedButton(() => false);
    }, 2000);
  };
  return (
    <nav>
      <img
        src={"/ham.png"}
        alt=""
        className="ham"
        onClick={() => setShowSidebar(() => true)}
      />
      <div className="account-details">
        <p className="account-name">Account 1</p>
        <p className="account-number">
          0x70......523d{" "}
          <img src="/copy.png" alt="" onClick={handleCopyClick} />
        </p>
        {showCopiedButton && (
          <button className="copy-button">
            <img src={"/polygon.png"} className="copy-image" /> Copied
          </button>
        )}
      </div>
      <div className="avatar-wrapper">
        <img src="/avatar.png" alt="" />
      </div>
    </nav>
  );
};

export default Nav;
