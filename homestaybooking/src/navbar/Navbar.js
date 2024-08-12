import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link className="navbar-brand text-light" to="">
          <img
            src="SB.png"
            alt="Logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          SwiftBook
        </Link>
        
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
