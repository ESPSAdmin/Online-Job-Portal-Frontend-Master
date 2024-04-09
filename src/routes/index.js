import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import { HomePage, Home } from "../PageComponent";
import {
  adminRoutes,
  authRoutes,
  employeeRoutes,
  employerRoutes,
} from "./privateRoutes";
import { contentRoutes } from "./publicRoutes";
import RequiresAuth from "./RequiresAuth";
import { useAuthContext } from "../context";

const Index = () => {
  const {token} = useAuthContext();
  console.log("token", token)
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/*" element={token ? <HomePage /> : <Home />} index />
          {authRoutes?.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
          {contentRoutes?.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
          <Route element={<RequiresAuth />}>
            {employerRoutes?.map((route, idx) => (
              <Route key={idx} {...route} />
            ))}
            {adminRoutes?.map((route, idx) => (
              <Route key={idx} {...route} />
            ))}
            {employeeRoutes?.map((route, idx) => (
              <Route key={idx} {...route} />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
};
export { Index };
