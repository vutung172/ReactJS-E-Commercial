import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [userCurrent, setUserCurrent] = useState({});

  const [isPassword, setIsPassword] = useState(true);
  const [isLoginClicked, setIsLoginCliked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(u => u.users.current)
  
  const handleLogin = () => {
    dispatch({ type: "USER_LOGIN", payload: userCurrent});
    console.log(user);
  };

  useEffect(() => {
    console.log("USER_LOGOUT");
    if (user && user.role) {
      if (user.role === 'customer') {
        navigate('/')
        console.log("customer")
      } else if (user.role === 'admin') {
        navigate('/admin')
        console.log("admin")
      } else {navigate('/login');
      console.log("login page")}
    } else {
      navigate('/login');
      console.log("login page")
      // dispatch({ type: "USER_LOGOUT"})
    }
  },[user, navigate]);

  const handleShowPassword = () => {
    if (isPassword) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const handleConfirm = () => {
    if (!isLoginClicked) {
      setIsLoginCliked(true);
    } else {
      setIsLoginCliked(false);
    }
  };

  const handleCurrent = (evt) => {
    setUserCurrent({ ...userCurrent, [evt.target.name]: evt.target.value });
    console.log(evt.target.name);
    console.log(evt.target.value);
  };

  

  return (
    <>
      <div id="wrapper-site">
        <div id="content-wrapper" className="full-width">
          <div id="main">
            <div className="container">
              <h1 className="text-center title-page">Log In</h1>
              <div className="login-form">
                <form>
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
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        disabled={!userCurrent.userId || !userCurrent.password}
                        onClick={handleConfirm}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Agreement Confirm
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="radio2"
                        id="radio2"
                        defaultChecked={userCurrent == '' ? "checked" : ""}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Default radio
                      </label>
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
                      <input type="hidden" />
                      <a
                        className="btn btn-primary"
                        id="btnSign-in"
                        onClick={handleLogin}
                      >
                        Sign in
                      </a>
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
