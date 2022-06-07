import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
interface IAuthRouteProps {
  children: JSX.Element;
}
const PrivatePage: React.FC<IAuthRouteProps> = ({ children }) => {
  if (!auth.currentUser) {
    return <Navigate to="/login" replace />;
  } else return <>{children}</>;
};
export default PrivatePage;
