import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="d-flex justify-content-between">
      <div>
        <img src="" alt="Logo" />
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
