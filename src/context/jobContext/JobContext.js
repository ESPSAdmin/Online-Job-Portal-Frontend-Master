import React, { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [token] = useState(sessionStorage.getItem("admin-jwtToken"));
  const [allJobs, setAllJobs] = useState([]);
  console.log("this is token", token);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/job/fetch/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setAllJobs(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      fetchAllJobs();
    }
  }, [token]);

  return (
    <JobContext.Provider value={{ allJobs, token }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
