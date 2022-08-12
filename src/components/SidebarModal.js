import { useState } from "react";
import "./sidebarContainer.css";
const SidebarModal = ({ setShowSidebar }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="sidebar-container">
      <div className="sidebar-image-wrapper">
        <img
          src={"/close-btn.png"}
          alt=""
          onClick={() => setShowSidebar(() => false)}
        />
      </div>
      <div
        className={
          active === 1
            ? "sidebar-item-active side-bar-item-wrapper"
            : "side-bar-item-wrapper"
        }
        onClick={() => setActive(() => 1)}
      >
        <img
          src={
            active === 1
              ? "/createAccountActive.png"
              : "/createAccountDisabled.png"
          }
          alt=""
          className={active === 1 && "active-sidebar-img"}
        />
        <p className={active === 1 && "active-sidebar"}>Create Account</p>
      </div>
      <div
        onClick={() => setActive(() => 2)}
        className={
          active === 2
            ? "sidebar-item-active side-bar-item-wrapper"
            : "side-bar-item-wrapper"
        }
      >
        <img
          src={
            active === 2
              ? "/createAccountActive.png"
              : "/createAccountDisabled.png"
          }
          alt=""
          className={active === 2 && "active-sidebar-img"}
        />
        <p className={active === 2 && "active-sidebar"}>Create Account</p>
      </div>
      <div
        onClick={() => setActive(() => 3)}
        className={
          active === 3
            ? "sidebar-item-active side-bar-item-wrapper"
            : "side-bar-item-wrapper"
        }
      >
        <img
          src={
            active === 3
              ? "/createAccountActive.png"
              : "/createAccountDisabled.png"
          }
          alt=""
          className={active === 3 && "active-sidebar-img"}
        />
        <p className={active === 3 && "active-sidebar"}>Create Account</p>
      </div>
      <div
        onClick={() => setActive(() => 4)}
        className={
          active === 4
            ? "sidebar-item-active side-bar-item-wrapper"
            : "side-bar-item-wrapper"
        }
      >
        <img
          src={
            active === 4
              ? "/createAccountActive.png"
              : "/createAccountDisabled.png"
          }
          alt=""
          className={active === 4 && "active-sidebar-img"}
        />
        <p className={active === 4 && "active-sidebar"}>Create Account</p>
      </div>
      <div
        onClick={() => setActive(() => 5)}
        className={
          active === 5
            ? "sidebar-item-active side-bar-item-wrapper"
            : "side-bar-item-wrapper"
        }
      >
        <img
          src={
            active === 5
              ? "/createAccountActive.png"
              : "/createAccountDisabled.png"
          }
          alt=""
          className={active === 5 && "active-sidebar-img"}
        />
        <p className={active === 5 && "active-sidebar"}>Create Account</p>
      </div>
    </div>
  );
};

export default SidebarModal;
