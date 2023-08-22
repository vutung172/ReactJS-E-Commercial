import React, { useEffect, } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ redirect, keyStore, children }) => {
  const user = JSON.parse(localStorage.getItem("myuser") || "{}")

  const navigate = useNavigate();

  useEffect(() => {
    navigate()
  }, []);

  if (user && user.role) {
    if (user.role === keyStore) {
      return children
    } else {navigate(redirect)}
  } else {navigate(redirect)}
};

export default AuthRoute;
