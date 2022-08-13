import { useState } from "react";
import "./App.css";
import SidebarModal from "./components/SidebarModal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AssetsAndActivity from "./components/AssetsAndActivity";
import Footer from "./components/Footer";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="App">
      <Nav setShowSidebar={setShowSidebar} />
      {showSidebar && <SidebarModal setShowSidebar={setShowSidebar} />}
      <Hero />
      <AssetsAndActivity />
      <Footer />
    </div>
  );
}

export default App;
