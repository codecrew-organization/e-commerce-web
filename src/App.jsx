import Products from "./components/Products";
import Navigation from "./components/Navigation";
import Home from "./Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-75 mx-auto">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
