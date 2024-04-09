import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ViewAllJobs = () => {
  const employer = JSON.parse(sessionStorage.getItem("active-employer"));
  const employer_jwtToken = sessionStorage.getItem("jwtToken");

  const [allJobs, setAllJobs] = useState([
    {
      id: "",
      employer: {
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
        phoneNo: "",
        role: "",
        address: {
          id: "",
          street: "",
          city: "",
          pincode: "",
          state: "",
          country: "",
        },
        registrationDate: "",
        status: "",
      },
      title: "",
      description: "",
      category: {
        id: "",
        name: "",
        description: "",
        status: "",
      },
      companyName: "",
      companyLogo: "",
      address: {
        id: "",
        street: "",
        city: "",
        pincode: "",
        state: "",
        country: "",
      },
      jobType: "",
      salaryRange: "",
      experienceLevel: "",
      requiredSkills: "",
      status: "",
      datePosted: "",
      applicationCount: "",
    },
  ]);

  let navigate = useNavigate();

  useEffect(() => {
    const getAllJobs = async () => {
      const allJobs = await retrieveAllJobs();
      if (allJobs) {
        setAllJobs(allJobs.jobs);
      }
    };

    getAllJobs();
  }, []);

  const retrieveAllJobs = async () => {
    const response = await axios.get("http://localhost:8080/api/job/fetch/all");
    console.log(response.data);
    return response.data;
  };

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
  };

  const viewAppliedJobs = (jobId) => {
    navigate(`/job/${jobId}/application/all`);
  };

  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <div
          className="row pt-3"
        >
          <h5>All Jobs Applications</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead className="bg-secondary-subtle">
                <tr>
                  <th scope="col" className="semi-bold">Company</th>
                  <th scope="col" className="semi-bold">Job</th>
                  <th scope="col" className="semi-bold">Category</th>
                  <th scope="col" className="semi-bold">Type</th>
                  <th scope="col" className="semi-bold">Salary Range</th>
                  <th scope="col" className="semi-bold">Experience</th>
                  <th scope="col" className="semi-bold">Location</th>
                  <th scope="col" className="semi-bold">Posted Date</th>
                  <th scope="col" className="semi-bold">Applied</th>
                  <th scope="col" className="semi-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {allJobs.map((job) => {
                  return (
                    <tr>
                      <td className="semi-bold">{job.companyName}</td>
                      {/* <td><img src={"http://localhost:8080/api/job/" + job.companyLogo} class="img-fluid"alt="food_pic"/></td> */}
                      <td>
                        <Link to={`/job/${job.id}/detail`} className="semi-bold nav-link">
                          {job.title}
                        </Link>
                      </td>
                      <td className="semi-bold">{job.category.name}</td>
                      <td className="text-sm">{job.jobType}</td>
                      <td>{job.salaryRange}</td>
                      <td className="text-sm">{job.experienceLevel}</td>
                      <td className="text-sm">{job.address.city}</td>
                      <td className="text-sm">{formatDateFromEpoch(job.datePosted)}</td>
                      <td className="text-sm">{job.applicationCount}</td>
                      <td>
                        <button
                          onClick={() => viewAppliedJobs(job.id)}
                          className="btn-main"
                        >
                          Applications
                        </button>
                      </td>
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

export default ViewAllJobs;
