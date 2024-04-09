import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaChevronRight } from "react-icons/fa";
import google_logo from "../images/google-symbol.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext, useUserContext } from "../context";
import { ForgotPassword,NewPassword } from "../popupModals/ForgotPassword";


const UserLoginForm = () => {
  const { loginHandler, token } = useAuthContext();
  const {modal, setModal} = useUserContext()
  const navigate = useNavigate();
  const location = useLocation();
  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: ""
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = async (e) => {
    e.preventDefault();
    const { emailId, password, role } = loginRequest;
    try {
      await loginHandler(emailId, password, role);
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login");
    }
  };

  useEffect(() => {
    if(token !== null){
      navigate(location?.state?.from?.pathname ?? "/");
    }
  },[token]);

  const handleToggleModal = (e) =>{
    setModal(2)
  } 

  return (
    <>
      <div className="container-fluid login-page">
        <div className="container-sm"> 
          <div className="row justify-content-end align-items-center py-3">   
            { modal == 1 ? (<div className="col-lg-5 p-2 rounded bg-white">
              <h3 className="text-primary fw-bold pt-3">Login Here</h3>
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
                <div className="mb-2 text-color">
                  <label htmlFor="role" className="semi-bold text-dark">User Role</label>
                  <select onChange={handleUserInput} className="form-control text-sm" name="role">
                    <option value="0">Select Role</option>
                    <option value="Admin"> Admin </option>
                    <option value="Employer"> Employer </option>
                    <option value="Employee"> Employee </option>
                  </select>
                </div>
                <div className="mb-2 text-color">
                  <label htmlFor="emailId" className="semi-bold text-dark"> Email Id </label>
                  <input type="email" className="form-control text-sm" id="emailId" name="emailId" onChange={handleUserInput} value={loginRequest.emailId} />
                </div>
                <div className="mb-2 text-color">
                  <label htmlFor="password" className="form-label text-secondary">Password</label>
                  <input type="password" className="form-control text-sm" id="password" name="password" onChange={handleUserInput} value={loginRequest.password} autoComplete="on" />
                </div>
                <div className="col d-flex gap-4 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4"
                    onClick={loginAction}
                  >
                    Login
                  </button>
                  <Link className="text-primary mt-2" onClick={handleToggleModal}>
                    Forgot your password?
                  </Link>
                </div>
              </form>
              <p className="text-center py-4 sidebar position-relative">or</p>
              <div className="col-lg mt-3 d-flex gap-3 flex-column justify-content-center align-items-center">
                <Link className="d-flex justify-content-between align-items-center w-100 py-2 border border-secondary px-3 rounded">
                  <img
                    src={google_logo}
                    className="navbar-brand"
                    width={30}
                    alt=""
                  />
                  <span className="text-secondary fw-bold">
                    Login with Google
                  </span>
                  <FaChevronRight />
                  </Link>
              </div>
            </div>) : modal == 2 ? <ForgotPassword /> : <NewPassword/> }
          </div>
        </div>
      </div>
      
    </>
  );
};

export default UserLoginForm;
