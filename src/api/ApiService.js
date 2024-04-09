const baseURL = "http://localhost:8080/api";



export const fetchAllJobs = `${baseURL}/job/fetch/all`;
export const fetchAllCategories = `${baseURL}/job/category/fetch/all`;
export const fetchAllJobType = `${baseURL}/helper/job/type/fetch/all`;
export const fetchAllJobSalary = `${baseURL}/helper/job/salary/range/fetch/all`;
export const fetchJobListByEmployer = `${baseURL}/job/fetch/employer-wise?employerId=`
export const deleteJobById = `${baseURL}/job/delete?jobId=`
export const fetchJobExperience = `${baseURL}/helper/job/expereince/fetch/all`;
export const fetchJobByData = `${baseURL}/job/search?categoryId=`

//user API
export const findUserByEmailId = `${baseURL}/user/fetch/email`;
export const updateUserPassword = `${baseURL}/user/update/password`;
export const getLoginUser = `${baseURL}/user/login`;
export const getUserSignup = `${baseURL}/user/register`;

