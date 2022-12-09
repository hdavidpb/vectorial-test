import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
