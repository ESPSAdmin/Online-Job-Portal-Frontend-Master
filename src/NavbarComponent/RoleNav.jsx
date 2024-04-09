import { useEffect, useState } from "react"; // Import useState if needed
import { useAuthContext } from "../context";
import AdminHeader from "./AdminHeader";
import HeaderEmployee from "./HeaderEmployee";
import HeaderEmployer from "./HeaderEmployer";
import NormalHeader from "./NormalHeader";

const RoleNav = () => {
  const { token } = useAuthContext();
  const [employee, setEmployee] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [employer, setEmployer] = useState(null);

  useEffect(() => {
    const employeeData = sessionStorage.getItem("active-employee");
    const adminData = sessionStorage.getItem("active-admin");
    const employerData = sessionStorage.getItem("active-employer");

    setEmployee(employeeData);
    setAdmin(adminData);
    setEmployer(employerData);
  }, [token]);

  if (employee !== null) {
    return <HeaderEmployee />;
  } else if (admin !== null) {
    return <AdminHeader />;
  } else if (employer !== null) {
    return <HeaderEmployer />;
  } else {
    return <NormalHeader />;
  }
};

export default RoleNav;
