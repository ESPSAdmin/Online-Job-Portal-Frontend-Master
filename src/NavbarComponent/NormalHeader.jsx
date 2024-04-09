import { NavLink, useNavigate } from "react-router-dom";

const NormalHeader = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar-nav ms-auto gap-3 align-items-center">
      <li className="nav-item">
        <NavLink
          to="/user/employer/register"
          className="nav-link text-dark"
          activeClassName="active"
        >
          Register Employer
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/user/employee/register"
          className="nav-link text-dark"
          activeClassName="active"
        >
          Register Employee
        </NavLink>
      </li>

      <li className="nav-item">
        <button
          className="btn btn-primary rounded-pill px-4"
          onClick={() => navigate("/user/login")}
        >
          Login
        </button>
      </li>
    </ul>
  );
};

export default NormalHeader;
