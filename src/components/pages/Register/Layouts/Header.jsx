// import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
// import { cartAct } from "../../../../redux/slice/cartSlice";
// import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  // Logion page Header

  // const dispatch = useDispatch();
  // const navigate = useNavigate();



  return (
    <>
      {/* Start header */}
      <header>
        {/* header desktop */}
        <div className="header-top d-xs-none ">
          <div className="container">
            <div className="row">
              {/* logo */}
              <div className="col-sm-2 col-md-2 d-flex align-items-center">
                <div id="logo">
                  <Link to={""}>
                    <img
                      className="img-fluid"
                      src="img/home/logo.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
              {/* menu */}
              <div className="main-menu col-sm-4 col-md-5 align-items-center justify-content-center navbar-expand-md">
                <div className="menu navbar collapse navbar-collapse">
                  <ul className="menu-top navbar-nav">
                    <li>
                      <Link to={"/"} className="parent">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a href="" className="parent">
                        Product Page
                      </a>
                      <div className="dropdown-menu drop-tab">
                        <ul>
                          <li className="item container group">
                            <div className="dropdown-menu dropdown-tab">
                              <ul>
                                <li className="item col-md-4 float-left">
                                  <div className="menu-content">
                                    <ul className="col">
                                      <li>
                                        <Link
                                          to={"/product"}
                                          href="product-grid-sidebar-left.html"
                                        >
                                          Product List
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={"/details"}>
                                          Product Detail
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="contact.html" className="parent">
                        Contact US
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* search*/}
              <div
                id="search_widget"
                className="col-sm-6 col-md-5 align-items-center justify-content-end d-flex"
              >
                <form method="get" action="#">
                  <input
                    type="text"
                    name="s"
                    defaultValue=""
                    placeholder="Search ..."
                    className="ui-autocomplete-input"
                    autoComplete="off"
                  />
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                </form>
                {/* acount  */}
                <div
                  id="block_myaccount_infos"
                  className="hidden-sm-down dropdown"
                >
                  <div className="myaccount-title">
                    <a href="#acount" data-toggle="collapse" className="acount">
                      <i className="fa fa-user" aria-hidden="true" />
                      <span> Welcom to Furnitica !</span>
                      <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                  </div>
                  <div id="acount" className="collapse">
                    <div className="account-list-content">
                      
                      <div>
                        <Link
                          className="register"
                          href="user-register.html"
                          rel="nofollow"
                          title="Register Account"
                          to={'/register'}
                        >
                          <i className="fa fa-user" />
                          <span>Register Account</span>
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="login"
                          to={"/forgot-password"}
                          rel="nofollow"
                          title="Did you remember your password"
                        >
                          <i className="fa fa-sign-in" />
                          <span>Forgot Password</span>
                        </Link>
                      </div>

                      <div
                        id="desktop_currency_selector"
                        className="currency-selector groups-selector hidden-sm-down"
                      >
                        <ul className="list-inline">
                          <li>
                            <a title="Euro" rel="nofollow" href="#">
                              EUR
                            </a>
                          </li>
                          <li className="current list-inline-item">
                            <a
                              title="British Pound Sterling"
                              rel="nofollow"
                              href="#"
                            >
                              GBP
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        id="desktop_language_selector"
                        className="language-selector groups-selector hidden-sm-down"
                      >
                        <ul className="list-inline">
                          <li className="list-inline-item current">
                            <a href="#">
                              <img
                                className="img-fluid"
                                src="img/home/home1-flas.jpg"
                                alt="English"
                                width={16}
                                height={11}
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                className="img-fluid"
                                src="img/home/home1-flas2.jpg"
                                alt="Italiano"
                                width={16}
                                height={11}
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                className="img-fluid"
                                src="img/home/home1-flas3.jpg"
                                alt="Français"
                                width={16}
                                height={11}
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                className="img-fluid"
                                src="img/home/home1-flas4.jpg"
                                alt="Español"
                                width={16}
                                height={11}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desktop_cart">
                  <div className="blockcart block-cart cart-preview tiva-toggle">
                    <div className="header-cart tiva-toggle-btn">
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* End header */}
    </>
  );
}
