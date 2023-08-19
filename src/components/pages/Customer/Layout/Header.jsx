import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartAct } from "../../../../redux/slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const carts = useSelector((c) => c.carts);
  const dispatch = useDispatch();
  const handleDeleteItemInCart = (id) => {
    dispatch(cartAct.deleteItemInCart(id));
  };
  const user = JSON.parse(localStorage.getItem("myuser") || "[]");
  console.log(user);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (user != "") {
      setIsLogin(true);
      console.log("Đã đăng nhập");
    } else {
      setIsLogin(false);
      console.log("Chưa đăng nhập");
    }
  }, [isLogin]);

  const handleSignOut = () => {
    setIsLogin(false);
    navigate("/login");
  };

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
                      {isLogin ? (
                        <span>
                          {" "}
                          Welcom <strong>{user.nickName}</strong> !
                        </span>
                      ) : (
                        <span> Welcom to Furnitica !</span>
                      )}
                      <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                  </div>
                  <div id="acount" className="collapse">
                    <div className="account-list-content">
                      <div>
                        <a
                          className="login"
                          href="user-acount.html"
                          rel="nofollow"
                          title="Log in to your customer account"
                        >
                          <i className="fa fa-cog" />
                          <span>My Account</span>
                        </a>
                      </div>
                      {isLogin ? (
                        <div>
                          <a
                            className="login"
                            rel="nofollow"
                            title="Log out"
                            onClick={handleSignOut}
                          >
                            <i className="fa fa-sign-in" />
                            <span>Sign out</span>
                          </a>
                        </div>
                      ) : (
                        <div>
                          <Link
                            className="login"
                            to={"/login"}
                            rel="nofollow"
                            title="Log in to your customer account"
                          >
                            <i className="fa fa-sign-in" />
                            <span>Sign in</span>
                          </Link>
                        </div>
                      )}
                      {isLogin ? (
                        ""
                      ) : (
                        <div>
                          <a
                            className="register"
                            href="user-register.html"
                            rel="nofollow"
                            title="Register Account"
                          >
                            <i className="fa fa-user" />
                            <span>Register Account</span>
                          </a>
                        </div>
                      )}
                      <div>
                        <a
                          className="check-out"
                          href="product-checkout.html"
                          rel="nofollow"
                          title="Checkout"
                        >
                          <i className="fa fa-check" aria-hidden="true" />
                          <span>Checkout</span>
                        </a>
                      </div>
                      <div>
                        <a href="user-wishlist.html" title="My Wishlists">
                          <i className="fa fa-heart" />
                          <span>My Wishlists</span>
                        </a>
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
                {isLogin ? (
                  <div className="desktop_cart">
                    <div className="blockcart block-cart cart-preview tiva-toggle">
                      <div className="header-cart tiva-toggle-btn">
                        <span className="cart-products-count">
                          {carts.length}
                        </span>
                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                      </div>
                      <div className="dropdown-content">
                        <div className="cart-content">
                          {carts.map((c) => (
                            <table key={c.product.id}>
                              <tbody>
                                <tr>
                                  <td className="product-image">
                                    <a href="product-detail.html">
                                      <img
                                        src={c.product.image}
                                        alt="Product"
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <div className="product-name">
                                      <a href="product-detail.html">
                                        {c.product.name}
                                      </a>
                                    </div>
                                    <div>
                                      {c.quantity}x
                                      <span className="product-price">
                                        £{c.product.price}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="action">
                                    <a
                                      className="remove"
                                      onClick={() => {
                                        handleDeleteItemInCart(c.product.id);
                                      }}
                                    >
                                      <i
                                        className="fa fa-trash-o"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  </td>
                                </tr>
                                <tr className="total">
                                  <td colSpan={2}>Total:</td>
                                  <td>{c.product.price * c.quantity}</td>
                                </tr>
                                <tr>
                                  <td
                                    colSpan={3}
                                    className="d-flex justify-content-center"
                                  >
                                    <div className="cart-button">
                                      <Link
                                        to={"/shoppingcart"}
                                        title="View Cart"
                                      >
                                        View Cart
                                      </Link>
                                      <Link to={"/checkout-infor"} title="Checkout">
                                        Checkout
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="desktop_cart">
                    <div className="blockcart block-cart cart-preview tiva-toggle">
                      <div className="header-cart tiva-toggle-btn">
                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* End header */}
    </>
  );
}
