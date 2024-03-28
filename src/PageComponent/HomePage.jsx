import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../JobComponent/JobCard";

const HomePage = () => {
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

  const [searchData, setSearchData] = useState({
    categoryId: "",
    jobType: "",
    salaryRange: "",
  });

  const [tempSearchData, setTempSearchData] = useState({
    categoryId: "",
    jobType: "",
    salaryRange: "",
  });

  const [categories, setCategories] = useState([]);

  const [jobTypes, setJobTypes] = useState([]);
  const [salaryRange, setSalaryRange] = useState([]);

  const handleUserInput = (e) => {
    setTempSearchData({ ...tempSearchData, [e.target.name]: e.target.value });
  };

  const retrieveAllCategories = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/job/category/fetch/all"
    );
    return response.data;
  };
  const retrieveAllJobTypes = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/helper/job/type/fetch/all"
    );
    return response.data;
  };
  const retrieveAllSalary = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/helper/job/salary/range/fetch/all"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllJobs = async () => {
      const allJobs = await retrieveAllJobs();
      if (allJobs) {
        setAllJobs(allJobs.jobs);
      }
    };

    const getSearchedJobs = async () => {
      const allJobs = await searchJobsByData();
      if (allJobs) {
        setAllJobs(allJobs.jobs);
      }
    };

    const getAllCategories = async () => {
      const resCategory = await retrieveAllCategories();
      if (resCategory) {
        setCategories(resCategory.categories);
      }
    };

    const getAllJobTypes = async () => {
      const res = await retrieveAllJobTypes();
      if (res) {
        setJobTypes(res);
      }
    };

    const getAllSalaryRange = async () => {
      const res = await retrieveAllSalary();
      if (res) {
        setSalaryRange(res);
      }
    };

    if (
      searchData.categoryId !== "" &&
      searchData.jobType !== "" &&
      searchData.salaryRange !== ""
    ) {
      getSearchedJobs();
    } else {
      getAllJobs();
    }

    getAllJobTypes();
    getAllSalaryRange();
    getAllCategories();
  }, [searchData]);

  const retrieveAllJobs = async () => {
    const response = await axios.get("http://localhost:8080/api/job/fetch/all");
    console.log(response.data);
    return response.data;
  };

  const searchJobsByData = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/job/search?categoryId=" +
        searchData.categoryId +
        "&jobType=" +
        searchData.jobType +
        "&salaryRange=" +
        searchData.salaryRange
    );
    console.log(response.data);
    return response.data;
  };

  const searchJob = (e) => {
    e.preventDefault();
    setSearchData(tempSearchData);
  };

  return (
    <>
      <div className="container-fluid py-4">
        <div className="container-sm py-4 bg-profile rounded">
          <h3 className="text-bright display-5 fw-bold text-center mt-3 pt-4">
            Search Jobs here..!!
          </h3>
          <form className="row justify-content-center py-4 g-3">
            <div className="col-auto">
              <select
                name="categoryId"
                onChange={handleUserInput}
                className="form-control"
                required
              >
                <option value="">Select Job Category</option>

                {categories.map((category) => {
                  return <option value={category.id}> {category.name} </option>;
                })}
              </select>
            </div>

            <div className="col-auto">
              <select
                name="jobType"
                onChange={handleUserInput}
                className="form-control"
                required
              >
                <option value="">Select Job Type</option>

                {jobTypes.map((type) => {
                  return <option value={type}> {type} </option>;
                })}
              </select>
            </div>

            <div className="col-auto">
              <select
                name="salaryRange"
                onChange={handleUserInput}
                className="form-control"
                required
              >
                <option value="">Select Salary Range</option>

                {salaryRange.map((range) => {
                  return <option value={range}> {range} </option>;
                })}
              </select>
            </div>

            <div className="col-auto">
              <button type="submit" className="btn-main" onClick={searchJob}>
                Search
              </button>
            </div>
          </form>
          <div className="d-flex aligns-items-center justify-content-center mt-3"></div>
        </div>
      </div>
      <div className="container-fluid py-3">
        <div className="container-sm py-4">
          <div className="row">
            {allJobs.map((job) => (
              <div className="col-lg-6">
                <JobCard item={job} key={job.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
