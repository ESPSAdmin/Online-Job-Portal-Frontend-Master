import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ViewAllEmployers = () => {
  const [allEmployer, setAllEmployer] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("jwtToken");

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveAllUser();
      if (allUsers) {
        setAllEmployer(allUsers.users);
      }
    };

    getAllUsers();
  }, []);

  const retrieveAllUser = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/fetch/role-wise?role=Employer",
      {
        headers: {
          Authorization: "Bearer " + admin_jwtToken, // Replace with your actual JWT token
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
  };

  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="row pt-3">
          <h5>All Employers</h5>
        </div>
        <div>
          <div className="table">
            <table className="table">
              <thead className="bg-secondary-subtle">
                <tr>
                  <th scope="col" className="semi-bold">Name</th>
                  <th scope="col" className="semi-bold">Role</th>
                  <th scope="col" className="semi-bold">Email Id</th>
                  <th scope="col" className="semi-bold">Phone No</th>
                  <th scope="col" className="semi-bold">Address</th>
                  <th scope="col" className="semi-bold">Registration Date</th>
                </tr>
              </thead>
              <tbody>
                {allEmployer.map((employer) => {
                  return (
                    <tr>
                      <td className="text-sm">{employer.firstName} {employer.lastName}</td>
                      <td className="text-sm">{employer.role}</td>
                      <td className="text-sm">{employer.emailId}</td>
                      <td className="text-sm">{employer.phoneNo}</td>
                      <td className="text-sm">{employer.address.street +", " + employer.address.city + ", " + employer.address.pincode}</td>
                      <td className="text-sm">{formatDateFromEpoch(employer.registrationDate)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllEmployers;
