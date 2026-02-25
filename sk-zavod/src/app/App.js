import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home.js";
import Navbar from "../components/Navbar.js";
function App() {
  return (
    <BrowserRouter>
    < Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
