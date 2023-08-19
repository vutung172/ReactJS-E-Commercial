import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function CheckoutInfor() {
  const [currentShippingInfor, setCurrentShippingInfor] = useState({});
  const [ myShippingInfor, setMyShippingInfor ] = useState({});

  const [shippingInfor, setShippingInfor] = useState({});
  const user = JSON.parse(localStorage.getItem("myuser") || "[]")

  useEffect(() => {
    setMyShippingInfor(user);
    console.log(myShippingInfor);
  },[])
  

  const handleOnchange = (evt) => {
    setCurrentShippingInfor({...currentShippingInfor, [evt.target.name]: evt.target.value});
    console.log(currentShippingInfor);
  }

  const handleShippingInfor = (state) => {
    setShippingInfor(state)
    sessionStorage.setItem('shippingInfor', JSON.stringify(shippingInfor)); 
  }

  return (
    <>
      <div id="wrapper-site">
        <div className="container">
          <div className="row">
            <div
              id="content-wrapper"
              className="col-xs-12 col-sm-12 col-md-12 col-lg-12 onecol"
            >
              <div id="main">
                <div className="cart-grid row">
                  <div className="col-md-9 check-info">
                    <div className="checkout-personal-step">
                      <h3 className="step-title h3 info">
                        <span className="step-number">1</span>PERSONAL
                        INFORMATION
                      </h3>
                    </div>
                    <div className="content">
                      <ul className="nav nav-inline">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#checkout-guest-form"
                          >
                            MY INFORMATION
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#checkout-login-form"
                          >
                            NEW INFORMATION
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        {/* My Information */}
                        <div
                          className="tab-pane fade in active show"
                          id="checkout-guest-form"
                          role="tabpanel"
                        >
                          <form
                            action=""
                            id="customer-form"
                            className="js-customer-form"
                          >
                            <div>
                              <input
                                type="hidden"
                                name="userID"
                                value={myShippingInfor.id}
                                
                              
                              />
                              <div className="form-group row">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                  className="form-control"
                                  name="firstName"
                                  type="text"
                                  placeholder="First Name"
                                  value={myShippingInfor?.firstName || ""}
                                  
                                  disabled readOnly
                                />
                              </div>
                              <div className="form-group row">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                  className="form-control"
                                  name="lastName"
                                  type="text"
                                  placeholder="Last Name"
                                  value={myShippingInfor?.lastName || ""}
                                  disabled readOnly
                                />
                              </div>
                              <div className="form-group row">
                                <label htmlFor="email">E-mail</label>
                                <input
                                  className="form-control"
                                  name="email"
                                  type="email"
                                  placeholder="Email"
                                  value={myShippingInfor?.email || ""}
                                  disabled readOnly
                                />
                              </div>
                              <div className="form-group row">
                                <label htmlFor="email">Phone Number</label>
                                <input
                                  className="form-control"
                                  name="phone"
                                  type="text"
                                  placeholder="Phone"
                                  value={myShippingInfor?.phone || ""}
                                  disabled readOnly
                                />
                              </div>
                              <div className="hidden-comment">
                                <div className="form-group row">
                                  <label htmlFor="email">
                                    Shipping Address
                                  </label>
                                  <input
                                    className="form-control"
                                    name="birthday"
                                    type="text"
                                    defaultValue=""
                                    placeholder=" Birthdate"
                                    value={myShippingInfor.address}
                                    disabled readOnly
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="clearfix">
                              <div className="row">
                                <input
                                  type="hidden"
                                  name="submitCreate"
                                  defaultValue={1}
                                />
                                <Link
                                  className="continue btn btn-primary pull-xs-right"
                                  name="continue"
                                  to={"/checkout-shipping-method"}
                                  onClick={handleShippingInfor}
                                >
                                  Continue
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* New Information */}
                        <div
                          className="tab-pane fade in active show"
                          id="checkout-guest-form"
                          role="tabpanel"
                        >
                          <form
                            action=""
                            id="customer-form"
                            className="js-customer-form"
                          >
                            <div>
                              <input
                                type="hidden"
                                name="id_customer"
                                onChange={handleOnchange}
                              />
                              <div className="form-group row">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                  className="form-control"
                                  name="firstName"
                                  type="text"
                                  placeholder="First Name"
                                  onChange={handleOnchange}
                                />
                              </div>
                              <div className="form-group row">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                  className="form-control"
                                  name="lastName"
                                  type="text"
                                  placeholder="Last Name"
                                  onChange={handleOnchange}
                                />
                              </div>
                              <div className="form-group row">
                                <label htmlFor="email">E-mail</label>
                                <input
                                  className="form-control"
                                  name="email"
                                  type="email"
                                  placeholder="Email"
                                  onChange={handleOnchange}
                                />
                              </div>
                              <div className="form-group row">
                                <label htmlFor="email">Phone Number</label>
                                <input
                                  className="form-control"
                                  name="phone"
                                  type="text"
                                  placeholder="Phone"
                                  onChange={handleOnchange}
                                />
                              </div>
                              <div className="hidden-comment">
                                <div className="form-group row">
                                  <label htmlFor="email">
                                    Shipping Address
                                  </label>
                                  <input
                                    className="form-control"
                                    name="birthday"
                                    type="text"
                                    defaultValue=""
                                    placeholder=" Birthdate"
                                    onChange={handleOnchange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="clearfix">
                              <div className="row">
                                <input
                                  type="hidden"
                                  name="submitCreate"
                                  defaultValue={1}
                                />
                                <Link
                                  className="continue btn btn-primary pull-xs-right"
                                  name="continue"
                                  to={"/checkout-shipping-method"}
                                  onClick={handleShippingInfor}
                                >
                                  Continue
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="checkout-personal-step">
                      <h3 className="step-title h3">
                        <span className="step-number">2</span>Addresses
                      </h3>
                    </div>
                    <div className="checkout-personal-step">
                      <h3 className="step-title h3">
                        <span className="step-number">3</span>Shipping Method
                      </h3>
                    </div>
                    <div className="checkout-personal-step">
                      <h3 className="step-title h3">
                        <span className="step-number">4</span>Payment
                      </h3>
                    </div>
                  </div>
                  <div className="cart-grid-right col-xs-12 col-lg-3">
                    <div className="cart-summary">
                      <div className="cart-detailed-totals">
                        <div className="cart-summary-products">
                          <div className="summary-label">
                            There are 3 item in your cart
                          </div>
                        </div>
                        <div
                          className="cart-summary-line"
                          id="cart-subtotal-products"
                        >
                          <span className="label js-subtotal">
                            Total products:
                          </span>
                          <span className="value">£200.00</span>
                        </div>
                        <div
                          className="cart-summary-line"
                          id="cart-subtotal-shipping"
                        >
                          <span className="label">Total Shipping:</span>
                          <span className="value">Free</span>
                          <div>
                            <small className="value" />
                          </div>
                        </div>
                        <div className="cart-summary-line cart-total">
                          <span className="label">Total:</span>
                          <span className="value">£200.00 (tax incl.)</span>
                        </div>
                      </div>
                    </div>
                    <div id="block-reassurance">
                      <ul>
                        <li>
                          <div className="block-reassurance-item">
                            <img
                              src="img/product/check1.png"
                              alt="Security policy (edit with Customer reassurance module)"
                            />
                            <span>
                              Security policy (edit with Customer reassurance
                              module)
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="block-reassurance-item">
                            <img
                              src="img/product/check2.png"
                              alt="Delivery policy (edit with Customer reassurance module)"
                            />
                            <span>
                              Delivery policy (edit with Customer reassurance
                              module)
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="block-reassurance-item">
                            <img
                              src="img/product/check3.png"
                              alt="Return policy (edit with Customer reassurance module)"
                            />
                            <span>
                              Return policy (edit with Customer reassurance
                              module)
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
