import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../context";

const HeaderEmployee = () => {
  const {logoutHandler} = useAuthContext();
  let navigate = useNavigate();

  const employee = sessionStorage.getItem("active-employee");

  const viewEmployeeProfile = () => {
    navigate("/employee/profile/detail", { state: employee });
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          to="/employee/job/application/all"
          class="nav-link text-uppercase"
          aria-current="page"
        >
          Applied Jobs
        </Link>
      </li>

      <li class="nav-item">
        <div class="nav-link text-dark text-uppercase" aria-current="page">
          <span className="text-color" onClick={viewEmployeeProfile}>
            My Profile
          </span>
        </div>
      </li>

      <li class="nav-item">
        <button className="btn btn-primary rounded-pill" onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  );
};

export default HeaderEmployee;
