import { useState } from "react";
import "./App.css";
import SidebarModal from "./components/SidebarModal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AssetsAndActivity from "./components/AssetsAndActivity";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="App">
      <Nav setShowSidebar={setShowSidebar} />
      {showSidebar && <SidebarModal setShowSidebar={setShowSidebar} />}
      <Hero />
      <AssetsAndActivity />
    </div>
  );
}

export default App;
