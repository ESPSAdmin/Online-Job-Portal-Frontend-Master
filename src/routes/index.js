import { Outlet, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import { HomePage, Home } from "../PageComponent";
import {
  adminRoutes,
  authRoutes,
  employeeRoutes,
  employerRoutes,
} from "./privateRoutes";
import { contentRoutes } from "./publicRoutes";

const Index = () => {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          {authRoutes?.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
          {contentRoutes?.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
          {employeeRoutes?.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
          {employerRoutes?.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
          {adminRoutes?.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
        </Route>
      </Routes>
    </>
  );
};
export { Index };
