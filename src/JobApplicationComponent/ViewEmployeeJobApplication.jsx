import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ViewEmployeeJobApplication = () => {
  const employee = JSON.parse(sessionStorage.getItem("active-employee"));
  const employee_jwtToken = sessionStorage.getItem("employee-jwtToken");

  const [applications, setApplications] = useState([
    {
      id: 1,
      applicationId: "",
      job: {
        id: 1,
        employer: {
          id: 4,
          firstName: "",
          lastName: "",
          emailId: "",
          phoneNo: "",
        },
        title: "",
        description: "",
        category: {
          id: 1,
          name: "",
          description: "",
          status: "",
        },
        address: {
          id: "",
          street: "",
          city: "",
          pincode: "",
          state: "",
          country: "",
        },
        companyName: "",
        companyLogo: "",
        jobType: "",
        salaryRange: "",
        experienceLevel: "",
        requiredSkills: "",
        status: "",
        datePosted: "",
        applicationCount: 0,
      },
      employee: {
        userProfile: {
          id: 1,
          bio: "",
          website: "",
          resume: "",
          linkedlnProfileLink: "",
          githubProfileLink: "",
          skills: [
            {
              id: 7,
              skill: "",
              experience: 0,
              userId: 0,
            },
          ],
          educations: [
            {
              id: 5,
              degree: "",
              institution: "",
              startDate: "",
              endDate: "",
              userId: 0,
            },
          ],
          workExperiences: [
            {
              id: 2,
              experience: 0,
              jobPosition: "",
              company: "",
              startDate: "",
              endDate: "",
              userId: 0,
            },
          ],
          profilePic: "",
        },
      },
      dateTime: "",
      status: "",
      jobId: 0,
      employeeId: 0,
    },
  ]);

  let navigate = useNavigate();

  useEffect(() => {
    const getAllJobs = async () => {
      const jobApplicationResponse = await retrieveAllJobApplication();
      if (jobApplicationResponse) {
        setApplications(jobApplicationResponse.applications);
      }
    };

    getAllJobs();
  }, []);

  const retrieveAllJobApplication = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/job/application/fetch/all/employee?employeeId=" +
        employee.id,
      {
        headers: {
          Authorization: "Bearer " + employee_jwtToken, // Replace with your actual JWT token
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  const cancelApplication = (applicationId, e) => {
    fetch("http://localhost:8080/api/job/application/update/status", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + employee_jwtToken,
      },
      body: JSON.stringify({
        id: applicationId,
        status: "Cancelled",
      }),
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
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
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          } else if (!res.success) {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
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
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Redirect after 3 seconds
      });
  };

  const formatDateFromEpoch = (epochTime) => {
    const currentDate = new Date();
    const postedDate = new Date(Number(epochTime));
    
    // Calculate the difference in milliseconds
    const timeDifference = currentDate.getTime() - postedDate.getTime();
    const oneDayInMilliseconds = 1000 * 60 * 60 * 24;

    // Convert the time difference to days
    const diffDays = Math.floor(timeDifference / oneDayInMilliseconds);

    if (diffDays === 0) {
        return "Applied Today";
    } else if (diffDays === 1) {
        return "Applied Yesterday";
    } else {
        return `Applied ${diffDays} days ago`;
    }
};

  return (
    <div className="container-fluid">
      <div className="container-sm">
        <div className="card-header py-3">
          <h2>My Job Applications ({applications.length})</h2>
        </div>
        <div className="row  mt-3">
          <div className="col-lg-6">
            {applications.map((item, idx) => (
              <div className="card mb-3" key={idx}>
                <div className="card-body position-relative">
                  <img
                    src={
                      "http://localhost:8080/api/job/" + item.job.companyLogo
                    }
                    alt=""
                    width={45}
                    className="position-absolute end-0 top-0 me-2 img-thumbnail mt-2"
                  />
                  <Link className="nav-link" to={`/job/${item.job.id}/detail`}>
                    <h5>{item.job.title} </h5>
                  </Link>
                  <span className="text-secondary">
                    Application ID: {item.applicationId}
                  </span>
                  <h6>{item.job.companyName}</h6>
                  {item.status === "Applied" ? (
                    <div className="d-flex align-items-center gap-3">
                      <span className="bg-success-subtle text-center px-2 m-0 rounded">
                        {item.status}
                      </span>
                      <Link
                        onClick={() => cancelApplication(item.id)}
                        className="fw-bold"
                      >
                        Cancel Application
                      </Link>
                    </div>
                  ) : (
                    <span className="bg-danger-subtle text-center px-3 py-1 rounded">
                      {item.status}
                    </span>
                  )}
                  <div className="row align-items-center py-3">
                    <div className="col">
                      <span className="text-secondary fw-bold">
                        {item.job.category.name}
                      </span>
                    </div>
                    <div className="col">
                      <span className="text-secondary fw-bold">
                        {item.job.jobType}
                      </span>
                    </div>
                    <div className="col">
                      <b className="text-secondary fw-bold">
                        {item.job.address.city}
                      </b>
                    </div>
                    <div className="col">
                      <b className="text-secondary fw-bold">
                        {formatDateFromEpoch(item.dateTime)}
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeJobApplication;
