import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { PiCurrencyInrBold } from "react-icons/pi";
import { BiSolidShoppingBag } from "react-icons/bi";
import { MdEmail } from "react-icons/md";


const JobDetailPage = () => {
  const { jobId } = useParams();
  const employee = JSON.parse(sessionStorage.getItem("active-employee"));
  const employee_jwtToken = sessionStorage.getItem("employee-jwtToken");
  const [dropdown, setDropdown] = useState(true);
  console.log(employee_jwtToken)

  const navigate = useNavigate();
  const dropBtn = () => {
    setDropdown(false)
  }
  const [jobApplyRequest, setJobApplyRequest] = useState({
    jobId: "",
    employeeId: "",
  });

  const [job, setJob] = useState({
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
  });

  useEffect(() => {
    const getJob = async () => {
      const fetchJobResponse = await retrieveJob();
      if (fetchJobResponse) {
        setJob(fetchJobResponse.jobs[0]);
      }
    };
    getJob();
  }, []);

  const retrieveJob = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/job/fetch?jobId=" + jobId
    );
    // console.log(response.data);
    return response.data;
  };

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
  };

  const applyForJob = (jobId, e) => {
    e.preventDefault();
    if (employee_jwtToken === null || employee_jwtToken === "") {
      toast.error("Please login as employee, for applying any Job", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/user/login");
    } else {
      jobApplyRequest.employeeId = employee.id;
      jobApplyRequest.jobId = jobId;

      fetch("http://localhost:8080/api/job/application/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
            Authorization: "Bearer " + employee_jwtToken,
        },
        body: JSON.stringify(jobApplyRequest),
      })
        .then((result) => {
          console.log("result", result);
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
                navigate("/home");
              }, 1000);
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
            } else {
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
    }
  };

  return (
    <>
      {/* <div
        className="container-fluid py-4 bg-info"
        style={{ backgroundImage: "url(https://shorturl.at/mvACV)" }}
      >
        <h5 className="py-4 text-center text-main-subtle display-4">
          Job Details
        </h5>
      </div>
      <div className="container-fluid mh-100">
        <div className="container-fluid d-flex justify-content-center">
          <div className="container-sm py-4">
            <div className="row gap-2 justify-content-center">
              <div className="col-lg-3 shadow py-4">
                <div className="col-md">
                  <div className="card-body">
                    <div className="row justify-content-center g-0">
                      <div className="col-lg-12 d-flex justify-content-center">
                        <img
                          src={
                            "http://localhost:8080/api/job/" + job.companyLogo
                          }
                          className="card-img-top rounded img-fluid"
                          alt="Company Logo"
                          style={{
                            maxHeight: "100px",
                            width: "auto",
                          }}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="card-body text-color">
                          <h5 className="text-main text-center">
                            {job.companyName}
                          </h5>
                          <p className="card-text text-center">
                            {job.address.street +
                              " " +
                              job.address.city +
                              " " +
                              job.address.pincode}
                            <br />
                            {job.address.state + " " + job.address.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md">
                  <div className="card-body">
                    <h4 className="card-title text-main">Employer Details</h4>
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <p className="mb-2">
                          <b>First Name:</b> {job.employer.firstName}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-2">
                          <b>Last Name:</b> {job.employer.lastName}
                        </p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <p className="mb-2">
                          <b>Email Id:</b> {job.employer.emailId}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-2">
                          <b>Contact:</b> {job.employer.phoneNo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 shadow py-4">
                <div className="col-lg">
                  <div className="row">
                    <div className="col-lg">
                      <h2>{job.title}</h2>
                      <p className="p-0 m-0">
                        <b>Job Category:</b> {job.category.name}
                      </p>
                      <p className="text-secondary">
                        <CiClock1 /> Posted on:{" "}
                        <span>{formatDateFromEpoch(job.datePosted)}</span>
                      </p>
                    </div>
                    <div className="col-lg-3 d-flex flex-column justify-content-center">
                      <button className="btn-main">Apply now</button>
                      <p className="mb-2">
                        <b>Applicants:</b> {job.applicationCount}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col">
                    <p className="mb-2">
                      <b>
                        <img
                          src={timing}
                          height="30"
                          width="auto"
                          class="d-inline-block align-top me-2"
                          alt=""
                        />
                        {job.jobType}
                      </b>
                    </p>
                  </div>
                  <div className="col">
                    <p className="mb-2">
                      <b>
                        <img
                          src={dollor}
                          height="25"
                          width="auto"
                          class="d-inline-block align-top"
                          alt=""
                        />
                        {job.salaryRange}
                      </b>
                    </p>
                  </div>
                  <div className="col">
                    <p className="mb-2">
                      <b>
                        <img
                          src={experience}
                          height="28"
                          width="auto"
                          class="d-inline-block align-top me-2"
                          alt=""
                        />
                        {job.experienceLevel}
                      </b>
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="">
                    <div className="card-body">
                      <div className="row mt-4 ms-4 me-4">
                        <div className="col-md">
                          <p className="mb-2">
                            <b>Job Desription:</b> <br/> {job.description}
                          </p>
                        </div>
                      </div>
                      <div className="row mt-4 ms-4 me-4">
                        <div className="col-md-4">
                          <p className="mb-2">
                            <b>Required Skills:</b> <br/> {job.requiredSkills}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="button"
                          className="btn-main"
                          onClick={(e) => applyForJob(job.id, e)}
                        >
                          Apply for Job
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid">
        <div className="container-sm">
          <div className="row py-4">
            <div className="col-lg-8">
              <div className="col-lg border rounded p-2 px-3">
                <img src={"http://localhost:8080/api/job/" + job.companyLogo} alt="" className="navbar-brand img-thumbnail" width={80} />
                <h5 className="m-0">{job.title}</h5>
                <span className="text-secondary semi-bold">{job.companyName}</span>
                <ul className="nav flex-column">
                  <li className="text-sm nav-item d-flex gap-2 align-items-center"><IoLocationSharp />{job.address.street +" " + job.address.city + " " + job.address.pincode}</li>
                  <li className="text-sm nav-item d-flex gap-2 align-items-center"><PiCurrencyInrBold />{job.salaryRange}</li>
                  <li className="text-sm nav-item d-flex gap-2 align-items-center"><BiSolidShoppingBag />{job.experienceLevel}</li>
                </ul>
                <p className="mt-3 d-flex align-items-center gap-2">
                  <span className="bg-secondary-subtle p-1 px-2 text-md rounded">{formatDateFromEpoch(job.datePosted)}</span>
                  <span className="bg-secondary-subtle p-1 px-2 text-md rounded"><IoTimeOutline /> {job.jobType}</span>
                </p>
                <div className="d-flex justify-content-end">
                  <button onClick={(e) => applyForJob(job.id, e)} className="btn btn-primary rounded-pill">Apply now</button>
                </div>
              </div>
              {job.applicationCount  > 0 ? (
                <div className="col-lg my-2">
                  <div className="alert alert-dark" role="alert">
                    Total {job.applicationCount} application are recieved yet.
                  </div>
                </div>
                ) : ("")}
                <div className={`${dropdown ? 'col-lg border rounded p-2 px-3 my-2 openDropBox' : 'col-lg border rounded p-2 px-3 my-2 position-relative'}`}>
                  <div className="accordian">
                    <h4>Job Description</h4>
                    <p>{job.description}</p>
                    {dropdown ? 
                    <Link onClick={dropBtn} className=" text-main nav-link position-absolute bottom-0 bg-light w-100 text-end start-0 px-2">Read more</Link>
                    : <Link></Link>}
                  </div>
                </div>
                <div className="col-lg border rounded p-2 px-3 my-2">
                  <div className="col">
                    <h6>Contact Person</h6>
                    <p className="text-capitalize m-0"><span className="h6">Name</span> : {job.employer.firstName}  {job.employer.lastName}</p>
                    <p><MdEmail /> {job.employer.emailId}</p>
                  </div>
                  <div className="col">
                    <h6>Interview Address</h6>
                    <p className="text-capitalize m-0">{job.address.street +" " + job.address.city + " " + job.address.pincode + " " + job.address.country}</p>
                    <p><MdEmail /> {job.employer.emailId}</p>
                  </div>
                </div>
            </div>
            <div className="col-lg">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailPage;
