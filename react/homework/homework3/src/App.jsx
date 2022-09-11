import { Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./utils/ProtectedRoutes";
import UserProvider from "./contexts/userContext";

import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Error404 from "./Errors/404";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <UserProvider>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
