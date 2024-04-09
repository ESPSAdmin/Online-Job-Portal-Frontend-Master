import React, { createContext, useState, useEffect } from "react";
import { useAuthContext } from "..";
import { fetchAllCategories, fetchAllJobSalary, fetchAllJobType, fetchAllJobs, 
        fetchJobExperience, fetchJobListByEmployer, deleteJobById } from "../../api/ApiService";
import axios from "axios";
import toast from "react-hot-toast";

export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const { token } = useAuthContext();
  const [allJobData, setAllJobData] = useState([]);
  const [allJobCategories, setAllCategories] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [jobExperience, setJobExperience] = useState([]);
  const [jobSalaryRange, setJobSalaryRange] = useState([]);

  const retrieveAllJobs = async () => {
    try {
      const response = await fetch(fetchAllJobs);
      const data = await response.json();
      setAllJobData(data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  const retriveAllCategories = async () => {
    try {
        const response = await axios.get(fetchAllCategories);
        setAllCategories(response.data.categories);
    } catch (error) {
        console.log(error);
    }
}

  const retrieveAllJobTypes = async() => {
    try {
      const response = await axios.get(fetchAllJobType)
      setJobType(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  const retrieveAllExperience = async() => {
    try {
      const response = await axios.get(fetchJobExperience);
      setJobExperience(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveAllSalary = async() => {
    try {
      const response = await axios.get(fetchAllJobSalary);
      console.log(response.data)
      setJobSalaryRange(response.data)
    } catch (error) {
      console.log(error)
    }
  }

const retrieveAllJobsByEmployer = async(EmployeId) => {
    try {
      const response = await axios.get(fetchJobListByEmployer + EmployeId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response.data;
    } catch(error) {
      console.log(error)
    }

}

const deleteJobPostById = async(jobId) => {
  try {
    await axios.delete(deleteJobById + jobId, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }, 
    });
    toast.success("deleted successfully")
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  } catch (error) {
    console.log(error)
  }
}

  useEffect(() => {
    retrieveAllJobs();
    retriveAllCategories();
    retrieveAllJobTypes();
    retrieveAllExperience();
    retrieveAllSalary();
    retrieveAllJobsByEmployer();
  }, []);

  return (
    <JobContext.Provider value={{ 
      allJobData, 
      token,
      allJobCategories,
      jobType,
      jobExperience,
      jobSalaryRange,
      retrieveAllJobsByEmployer,
      deleteJobPostById
      }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
