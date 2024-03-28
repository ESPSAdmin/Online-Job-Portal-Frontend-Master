import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
// import logo from "../images/e_logo.png";

const Header = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg sticky-top bg-bright">
        <div class="container-sm text-color">
          {/* <img
            src={logo}
            height="60"
            width="auto"
            class="d-inline-block align-top"
            alt=""
          /> */}
          <Link to="/home" class="navbar-brand fw-bold text-main hover-main">
            ESPS Career
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/aboutus" class="nav-link active" aria-current="page">
                  About Us
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  to="/contactus"
                  class="nav-link active"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
