import { useState } from "react";
import "./App.css";
import SidebarModal from "./components/SidebarModal";
import Nav from "./components/Nav";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="App">
      <Nav setShowSidebar={setShowSidebar} />
      {showSidebar && <SidebarModal setShowSidebar={setShowSidebar} />}
    </div>
  );
}

export default App;
