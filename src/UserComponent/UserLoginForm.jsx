import { useState } from "react";
import { toast } from "react-toastify";
import { FaChevronRight } from "react-icons/fa";
import google_logo from "../images/google-symbol.png";

import { Link } from "react-router-dom";
import { getLoginUser } from "../api/ApiService";

const UserLoginForm = () => {
  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    e.preventDefault();
    fetch(getLoginUser, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          if (res.success) {
            console.log("Got the success response");

            if (res.jwtToken !== null) {
              if (res.user.role === "Admin") {
                sessionStorage.setItem(
                  "active-admin",
                  JSON.stringify(res.user)
                );
                sessionStorage.setItem("admin-jwtToken", res.jwtToken);
              } else if (res.user.role === "Employer") {
                sessionStorage.setItem(
                  "active-employer",
                  JSON.stringify(res.user)
                );
                sessionStorage.setItem("employer-jwtToken", res.jwtToken);
              } else if (res.user.role === "Employee") {
                sessionStorage.setItem(
                  "active-employee",
                  JSON.stringify(res.user)
                );
                sessionStorage.setItem("employee-jwtToken", res.jwtToken);
              }
            }

            if (res.jwtToken !== null) {
              toast.success(res.responseMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(() => {
                window.location.href = "/home";
              }, 1000); // Redirect after 3 seconds
            } else {
              toast.error(res.responseMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          } else {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    e.preventDefault();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container-sm">
          <div className="row justify-content-center min-h-87 align-items-center ">
            <div className="col-lg-6 py-3 my-4 shadow bg-white">
              <h3 className="text-main fw-bold pt-3">Login Here</h3>
              <p className="text-secondary">
                Don't Have an account?{" "}
                <Link to="/user/employee/register" className="text-primary">
                  {" "}
                  Register as Employee
                </Link>{" "}
                /
                <Link to="/user/employer/register" className="text-primary">
                  {" "}
                  Register as Employer
                </Link>
              </p>
              <form>
                <div className="mb-3 text-color">
                  <label htmlFor="role" className="form-label text-secondary">
                    <b>User Role</b>
                  </label>
                  <select
                    onChange={handleUserInput}
                    className="form-control rounded py-2"
                    name="role"
                  >
                    <option value="0">Select Role</option>
                    <option value="Admin"> Admin </option>
                    <option value="Employer"> Employer </option>
                    <option value="Employee"> Employee </option>
                  </select>
                </div>

                <div className="mb-3 text-color">
                  <label
                    htmlFor="emailId"
                    className="form-label text-secondary"
                  >
                    <b>Email Id</b>
                  </label>
                  <input
                    type="email"
                    className="form-control rounded py-2"
                    id="emailId"
                    name="emailId"
                    onChange={handleUserInput}
                    value={loginRequest.emailId}
                  />
                </div>
                <div className="mb-3 text-color">
                  <label
                    htmlFor="password"
                    className="form-label text-secondary"
                  >
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control rounded py-2"
                    id="password"
                    name="password"
                    onChange={handleUserInput}
                    value={loginRequest.password}
                    autoComplete="on"
                  />
                </div>
                <div className="col mt-4">
                  <button
                    type="submit"
                    className="btn-main rounded w-100 py-2"
                    onClick={loginAction}
                  >
                    Login
                  </button>
                  <Link className="text-primary mt-2">
                    Forgot your password?
                  </Link>
                </div>
              </form>
              <p className="text-center py-4 sidebar position-relative">or</p>
              <div className="col-lg mt-3 d-flex gap-3 flex-column justify-content-center align-items-center">
                <Link className="d-flex nav-link justify-content-between align-items-center w-100 py-2 border border-secondary px-3 rounded">
                  <img
                    src={google_logo}
                    className="navbar-brand"
                    width={30}
                    alt=""
                  />
                  <span className="text-secondary nav-link fw-bold">
                    Login with Google
                  </span>
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLoginForm;
