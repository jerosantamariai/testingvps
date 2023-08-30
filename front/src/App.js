import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Home from "./views/home.jsx";
import Test from "./views/test.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
