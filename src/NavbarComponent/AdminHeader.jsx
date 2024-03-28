import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-dark"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link
              to="/admin/job/category/add"
              className="nav-link active"
              aria-current="page"
            >
              Add Category
            </Link>
          </li>
          <li>
            <Link
              to="/admin/job/category/all"
              className="nav-link active"
              aria-current="page"
            >
              All Categories
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-dark"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          View Jobs
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link
              to="admin/job/all"
              className="nav-link active"
              aria-current="page"
            >
              All Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/admin/job/application/all"
              className="nav-link active"
              aria-current="page"
            >
              All Job Applications
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/employee/all"
          className="nav-link active"
          aria-current="page"
        >
          View Employees
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/employer/all"
          className="nav-link active"
          aria-current="page"
        >
          View Employers
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/user/admin/register"
          className="nav-link active"
          aria-current="page"
        >
          Register Admin
        </Link>
      </li>
      <li className="nav-item">
        <button className="btn-main" onClick={adminLogout}>
          Logout
        </button>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
