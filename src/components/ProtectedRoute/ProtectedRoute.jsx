import { Navigate } from "react-router-dom";
import * as React from "react";

const ProtectedRoute = ({ isLoggedIn, element }) => {
  return (
    isLoggedIn ? element : <Navigate to="/" replace />
  );
}
export default ProtectedRoute;
