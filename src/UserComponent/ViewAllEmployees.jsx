import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ViewAllEmployees = () => {
  const [allEmployee, setAllEmployee] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("jwtToken");

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveAllUser();
      if (allUsers) {
        setAllEmployee(allUsers.users);
      }
    };

    getAllUsers();
  }, []);

  const retrieveAllUser = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/fetch/role-wise?role=Employee",
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
          <h5>All Employees</h5>
        </div>
        <div className="row">
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
                {allEmployee.map((employee) => {
                  return (
                    <tr>
                      <td className="text-sm">{employee.firstName} {employee.lastName}</td>
                      <td className="text-sm">{employee.role}</td>
                      <td className="text-sm">{employee.emailId}</td>
                      <td className="text-sm">{employee.phoneNo}</td>
                      <td className="text-sm">{employee.address.street +
                            ", " +
                            employee.address.city +
                            ", " +
                            employee.address.pincode}
                      </td>
                      <td className="text-sm">{formatDateFromEpoch(employee.registrationDate)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
};

export default ViewAllEmployees;
