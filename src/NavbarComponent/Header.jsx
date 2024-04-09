import { NavLink, Link } from "react-router-dom";
import RoleNav from "./RoleNav";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <div className="container-sm text-color">
          <Link to="/" className="navbar-brand fw-bold text-primary hover-main">
            ESPS Career
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto gap-3">
              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link" activeClassName="active">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contactus" className="nav-link" activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <RoleNav />
          </div>
        </div>
      </nav>
  );
};

export default Header;
