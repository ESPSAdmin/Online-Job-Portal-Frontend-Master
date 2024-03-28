import { Link, useNavigate } from "react-router-dom";

const NormalHeader = () => {
  const navigate = useNavigate();
  return (
    <ul class="navbar-nav ms-auto mb-2  me-5">
      <li class="nav-item">
        <Link
          to="/user/employer/register"
          class="nav-link active"
          aria-current="page"
        >
          Register Employer
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/employee/register"
          class="nav-link active"
          aria-current="page"
        >
          Register Employee
        </Link>
      </li>

      <li class="nav-item">
        <button
          className="btn-main fw-bold"
          onClick={() => navigate("/user/login")}
        >
          Login
        </button>
      </li>
    </ul>
  );
};

export default NormalHeader;
