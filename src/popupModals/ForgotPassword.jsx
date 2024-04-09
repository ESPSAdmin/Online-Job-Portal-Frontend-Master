import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context";

let useremail ;

export const ForgotPassword = () => {
  const { getUserByEmail,setModal } = useUserContext();
  const [email, setEmail] = useState();
  const handleFindUser = async(e) => {
    e.preventDefault();
    try {
        const response = await getUserByEmail(email);
        console.log(response[0].emailId)
        useremail = response[0].emailId
        if(response.length > 0){
            setModal(3)
        }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
      <div className="col-lg-5 bg-light p-2 rounded">
        <h4>Forgot your password</h4>
        <form onSubmit={handleFindUser}>
          <div className="form-group mb-3">
            <label htmlFor="" className="semi-bold">
              Enter your email address
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control test-sm rounded-pill" />
          </div>
          <div className="form-group d-flex justify-content-end">
            <button type="submit" className="btn btn-primary rounded-pill w-25">Find</button>
          </div>
        </form>
        <p className="d-flex flex-column">
          <Link>try another way</Link>
          <Link to='/user/login' onClick={() => window.location.reload()}>Back to login</Link>
        </p>
      </div>
    </>
  );
};


export const NewPassword = ({ useremail }) => {
  const {updatePassword} = useUserContext();
  const emailId = sessionStorage.getItem('emailID');
  console.log("from hos",emailId);
   const [passwordCredential, setPasswordCredential] = useState({
      emailId: emailId,
      password: ''
  });

  const handleChangePassword = (e) => {
      e.preventDefault();
      updatePassword(passwordCredential);
  }

  return (
      <div className="col-lg-5 bg-light p-2 rounded">
          <h4>Change your password</h4>
          <form onSubmit={handleChangePassword}>
              <div className="form-group mb-3">
                  <label htmlFor="newPassword" className="semi-bold">
                      New password
                  </label>
                  <input
                      type="password"
                      id="newPassword"
                      value={passwordCredential.password}
                      onChange={(e) => setPasswordCredential({ ...passwordCredential, password: e.target.value })}
                      className="form-control test-sm rounded-pill"
                  />
              </div>
              <div className="form-group mb-3">
                  <label htmlFor="confirmPassword" className="semi-bold">
                      Confirm new password
                  </label>
                  <input
                      type="password"
                      id="confirmPassword"
                      className="form-control test-sm rounded-pill"
                  />
              </div>
              <div className="form-group d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary rounded-pill">Change password</button>
              </div>
          </form>
          <Link to="/user/login" onClick={() => window.location.reload()} className="py-3">Back to login</Link>
      </div>
  );
}

