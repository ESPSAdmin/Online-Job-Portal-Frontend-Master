import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../context";

const AdminHeader = () => {
  const { logoutHandler } = useAuthContext();

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-2">
      <li className="nav-item dropdown">
        <NavLink
          to="/admin/job/category/all"
          className="nav-link"
          activeClassName="active"
          aria-current="page"
        >
          Categories
        </NavLink>
      </li>

      <li className="nav-item dropdown">
        <a
          className="dropdown-toggle text-secondary text-sm"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          View Jobs
        </a>
        <ul className="dropdown-menu">
          <li>
            <NavLink
              to="/admin/job/all"
              className="nav-link"
              activeClassName="active"
              aria-current="page"
            >
              All Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/job/application/all"
              className="nav-link"
              activeClassName="active"
              aria-current="page"
            >
              All Job Applications
            </NavLink>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <NavLink
          to="/admin/employee/all"
          className="nav-link"
          activeClassName="active"
          aria-current="page"
        >
          View Employees
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/admin/employer/all"
          className="nav-link"
          activeClassName="active"
          aria-current="page"
        >
          View Employers
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/user/admin/register"
          className="nav-link"
          activeClassName="active"
          aria-current="page"
        >
          Register Admin
        </NavLink>
      </li>
      <li className="nav-item">
        <button className="btn btn-primary rounded-pill" onClick={logoutHandler}>
          Logout
        </button>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
