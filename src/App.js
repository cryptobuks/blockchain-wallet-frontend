import { useState } from "react";
import "./App.css";
import SidebarModal from "./components/SidebarModal";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="App">
      <nav>
        <img
          src={"/ham.png"}
          alt=""
          className="ham"
          onClick={() => setShowSidebar(() => true)}
        />
      </nav>
      {showSidebar && <SidebarModal setShowSidebar={setShowSidebar} />}
    </div>
  );
}

export default App;
