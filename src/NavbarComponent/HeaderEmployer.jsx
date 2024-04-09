import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../context";

const HeaderEmployer = () => {
  const { logoutHandler } = useAuthContext();

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
      <li className="nav-item">
        <NavLink
          to="/employer/job/post"
          className="nav-link"
          activeClassName="active"
        >
          Add Job
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/employer/job/all"
          className="nav-link"
          activeClassName="active"
        >
          My Jobs
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/employer/job/application/all"
          className="nav-link"
          activeClassName="active"
        >
          Job Applications
        </NavLink>
      </li>

      <li className="nav-item">
        <button className="btn btn-primary rounded-pill" onClick={logoutHandler}>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default HeaderEmployer;
