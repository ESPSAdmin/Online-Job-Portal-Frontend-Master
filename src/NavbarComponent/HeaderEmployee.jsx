import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HeaderEmployee = () => {
  let navigate = useNavigate();

  const employee = JSON.parse(sessionStorage.getItem("active-employee"));

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-employee");
    sessionStorage.removeItem("employee-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };

  const viewEmployeeProfile = () => {
    navigate("/employee/profile/detail", { state: employee });
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          to="/employee/job/application/all"
          class="nav-link active"
          aria-current="page"
        >
          Applied Jobs
        </Link>
      </li>

      <li class="nav-item">
        <div class="nav-link text-dark" aria-current="page">
          <span className="text-color" onClick={viewEmployeeProfile}>
            My Profile
          </span>
        </div>
      </li>

      <li class="nav-item">
        <button className="btn-main" onClick={userLogout}>Logout</button>
      </li>
    </ul>
  );
};

export default HeaderEmployee;
