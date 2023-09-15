import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.userInfo);
  //   console.log(children);
  if (user.uid) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }

  //   return user.uid ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
