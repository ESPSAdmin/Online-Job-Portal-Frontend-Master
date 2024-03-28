import AddCategoryForm from "../CategoryComponent/AddCategoryForm";
import UpdateCategoryForm from "../CategoryComponent/UpdateCategoryForm";
import ViewAllCategories from "../CategoryComponent/ViewAllCategories";
import { ViewEmployeeJobApplication } from "../JobApplicationComponent";
import ViewAllJobApplication from "../JobApplicationComponent/ViewAllJobApplication";
import ViewEmployerJobApplication from "../JobApplicationComponent/ViewEmployerJobApplication";
import AddJobForm from "../JobComponent/AddJobForm";
import ViewAllJobs from "../JobComponent/ViewAllJobs";
import ViewEmployerJobs from "../JobComponent/ViewEmployerJobs";
import { EmployeeProfile, UserLoginForm, UserRegister } from "../UserComponent";
import AdminRegisterForm from "../UserComponent/AdminRegisterForm";
import ViewAllEmployees from "../UserComponent/ViewAllEmployees";
import ViewAllEmployers from "../UserComponent/ViewAllEmployers";

const authRoutes = [
  {
    path: "/user/login",
    element: <UserLoginForm />,
  },
  {
    path: "/user/employer/register",
    element: <UserRegister />,
  },
  {
    path: "/user/employee/register",
    element: <UserRegister />,
  },
];

const employeeRoutes = [
  {
    path: "/employee/job/application/all",
    element: <ViewEmployeeJobApplication />,
  },
  {
    path: "/employee/profile/detail",
    element: <EmployeeProfile />,
  },
];
const employerRoutes = [
  {
    path: "/employer/job/post",
    element: <AddJobForm />,
  },
  {
    path: "/employer/job/all",
    element: <ViewEmployerJobs />,
  },
  {
    path: "/employer/job/application/all",
    element: <ViewEmployerJobApplication />,
  },
];

const adminRoutes = [
  {
    path: "/admin/job/category/add",
    element: <AddCategoryForm />,
  },
  {
    path: "/admin/job/category/all",
    element: <ViewAllCategories />,
  },
  {
    path: "/admin/job/category/update",
    element: <UpdateCategoryForm />,
  },
  {
    path: "/admin/job/all",
    element: <ViewAllJobs />,
  },
  {
    path: "/admin/employee/all",
    element: <ViewAllEmployees />,
  },
  {
    path: "/admin/employer/all",
    element: <ViewAllEmployers />,
  },
  {
    path: "/admin/job/application/all",
    element: <ViewAllJobApplication />,
  },
  {
    path: "/user/admin/register",
    element: <AdminRegisterForm />,
  },
];

export { authRoutes, employeeRoutes, employerRoutes, adminRoutes };
