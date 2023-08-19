import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ redirect, keyStore, children }) => {
    const myUser = JSON.parse(localStorage.getItem("myuser") || "[]")
    const [isLogin, setIsLogin] = useState(false);

    console.log(myUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (myUser !=="") {
      setIsLogin(true)
    } else (setIsLogin(false))
    
  }, [isLogin]);

  if (myUser !== "") {
    console.log("đã đăng nhập");
    if (myUser.role === keyStore ) {
      console.log("kiểm tra role", myUser.role);
      return children;
    }  else {console.log("không có role")}
  } else {
    console.log("chưa đăng nhập");
    return navigate(redirect);  
  }
  
};

export default AuthRoute;
