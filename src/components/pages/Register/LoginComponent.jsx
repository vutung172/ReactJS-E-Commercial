import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [userCurrent, setUserCurrent] = useState({});
  const { data: users } = useSelector((u) => u.users);


  const [isPassword, setIsPassword] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  console.log(users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      dispatch({ type: "USER_FETCH", payload: users });
      localStorage.setItem("myuser", "[]");
    } else {setIsLogin(true)}
  }, [isLogin]);

  const handleShowPassword = () => {
    if (isPassword) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const handleCurrent = (evt) => {
    setUserCurrent({ ...userCurrent, [evt.target.name]: evt.target.value });
    console.log(evt.target.name);
    console.log(evt.target.value);
  };


  const handleLogin = () => {
    const user = users.filter((u) => u.userID == userCurrent.userId);
    

    if (user == {}) {
      alert("User ID không đúng");
      localStorage.setItem("myuser", "[]");
    } else if (userCurrent.password != user[0].password) {
      alert("Mật Khẩu không đúng");
      localStorage.setItem("myuser", "[]");
      console.log(userCurrent.password);
    } else {
      localStorage.setItem("myuser", JSON.stringify(user[0]) || "[]");
      switch (user[0].role) {
        case "admin":
          console.log("admin");
          navigate("/admin");
          break;
        case "customer":
          console.log("customer");
          navigate("/");
          break;
        case "master":
          console.log("master")
          navigate("/");

      }
    }
  };
  return (
    <>
      <div id="wrapper-site">
        <div id="content-wrapper" className="full-width">
          <div id="main">
            <div className="container">
              <h1 className="text-center title-page">Log In</h1>
              <div className="login-form">
                <form id="customer-form">
                  <div>
                    <input
                      type="hidden"
                      name="back"
                      defaultValue="my-account"
                    />
                    <div className="form-group no-gutters">
                      <input
                        className="form-control"
                        name="userId"
                        type="text"
                        placeholder=" Please fill in your User ID"
                        onChange={handleCurrent}
                      />
                    </div>
                    <div className="form-group no-gutters">
                      <div className="input-group js-parent-focus">
                        <input
                          className="form-control js-child-focus js-visible-password"
                          name="password"
                          type={isPassword ? "password" : "text"}
                          defaultValue=""
                          placeholder=" Please fill in your Password"
                          onChange={handleCurrent}
                        />
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          onClick={handleShowPassword}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Show Password
                        </label>
                      </div>
                    </div>

                    <div className="no-gutters text-center">
                      <div className="forgot-password">
                        <Link to={"register"} rel="nofollow">
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix">
                    <div className="text-center no-gutters">
                      <input type="hidden" name="Login" />
                      <button
                        className="btn btn-primary"
                        data-link-action=""
                        type="submit"
                        onClick={handleLogin}
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
