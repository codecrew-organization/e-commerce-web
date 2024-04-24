import Product from "./components/Product";
import Navigation from "./components/Navigation";
import Home from "./Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 pt-4">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
