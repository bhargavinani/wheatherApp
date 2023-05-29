import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

import Location from "./Components/Location";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
