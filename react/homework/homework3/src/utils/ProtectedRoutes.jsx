import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "../contexts/userContext";

const ProtectedRoutes = () => {
  const { user } = useUserContext();

  return user.firstName ? <Outlet /> : <Navigate to="/signup" />;
};

export default ProtectedRoutes;
