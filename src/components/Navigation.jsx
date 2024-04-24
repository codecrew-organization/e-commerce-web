import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="d-flex justify-content-between w-75 mx-auto">
      <div>
        <img src="" alt="Logo" />
      </div>
      <nav className="d-flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
      </nav>
    </div>
  );
};

export default Navigation;
