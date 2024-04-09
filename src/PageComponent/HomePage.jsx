import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../JobComponent/JobCard";
import { useJobContext } from "../context";
import { fetchJobByData } from "../api/ApiService";

const HomePage = () => {
  const {allJobData, jobType, jobSalaryRange, allJobCategories } = useJobContext();
  const [allJobs, setAllJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [salaryRange, setSalaryRange] = useState([]);
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
  

  const handleUserInput = (e) => {
    setTempSearchData({ ...tempSearchData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getAllJobs = () => {
      setAllJobs(allJobData);
    };

    const getSearchedJobs = async () => {
      const allJobs = await searchJobsByData();
      if (allJobs) {
        setAllJobs(allJobs.jobs);
      }
    };

    const getAllCategories = () => {
      setCategories(allJobCategories);
    };

    const getAllJobTypes = () => {
      setJobTypes(jobType);
    };

    const getAllSalaryRange = () => {
      setSalaryRange(jobSalaryRange);
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
  }, [searchData, allJobData]);

  const searchJobsByData = async () => {
    const response = await axios.get(
        fetchJobByData +
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
              <button type="submit" className="btn btn-primary rounded-pill border border-light" onClick={searchJob}>
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