import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../config/firebase";
interface IAuthRouteProps {
  children: React.ReactNode;
}
const PrivatePage: React.FC<IAuthRouteProps> = ({ children }) => {
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      }
    });
    return () => unsubscribe();
  }, []);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
export default PrivatePage;
