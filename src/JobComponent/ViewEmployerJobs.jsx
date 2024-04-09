import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useJobContext } from "../context";

const ViewEmployerJobs = () => {
  const {retrieveAllJobsByEmployer, deleteJobPostById} = useJobContext()
  const employer = JSON.parse(sessionStorage.getItem("active-employer"));
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
      const allJobs = await retrieveAllJobsByEmployer(employer.id);
      if (allJobs) {
        setAllJobs(allJobs.jobs);
      }
    };
    getAllJobs();
  }, []);

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
      <div className="conatainer-sm py-4">
        <div  className="row py-3">
          <h2 className="text-main display-6 fw-bold">My Jobs</h2>
        </div>
        <table className="table">
              <thead>
                <tr>
                  <th scope="col">Company Name</th>
                  <th scope="col">Job</th>
                  <th scope="col">Category</th>
                  <th scope="col">Type</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Experience</th>
                  <th scope="col">Location</th>
                  <th scope="col">Posted Date</th>
                  <th scope="col">Applied</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allJobs.map((job) => {
                  return (
                    <tr>
                      <td className="semi-bold">
                        {job.companyName}
                      </td>
                      {/* <td>
                        <img src={"http://localhost:8080/api/job/" + job.companyLogo} class="img-fluid" width={50} alt="company_logo"/>
                      </td> */}
                      <td className="semi-bold">
                        <Link
                          to={`/job/${job.id}/detail`}
                          style={{ textDecoration: "none" }}
                          className="text-color"
                        >
                          {job.title}
                        </Link>
                      </td>
                      <td className="semi-bold">
                        {job.category.name}
                      </td>
                      <td className="semi-bold">
                        {job.jobType}
                      </td>
                      <td className="semi-bold text-uppercase">
                        {job.salaryRange}
                      </td>
                      <td className="semi-bold">
                        {job.experienceLevel}
                      </td>
                      <td className="semi-bold">
                        {job.address.city}
                      </td>
                      <td className="semi-bold">
                        {formatDateFromEpoch(job.datePosted)}
                      </td>
                      <td>
                        <b>{job.applicationCount}</b>
                      </td>
                      <td className="d-flex gap-2">
                        <Link
                          onClick={() => viewAppliedJobs(job.id)}
                          className=""
                        >
                          Applications
                        </Link>
                        <Link
                          onClick={() => deleteJobPostById(job.id)}
                          className=""
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
      </div>
    </div>
  );
};

export default ViewEmployerJobs;
