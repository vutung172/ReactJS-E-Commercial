import React, { useEffect } from "react";

export default function CheckoutPayment() {

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
                      
                      <div className="tab-content">
                        <div
                          className="tab-pane fade in active show"
                          id="checkout-guest-form"
                          role="tabpanel"
                        >
                          <form
                            action="#"
                            id="customer-form"
                            className="js-customer-form"
                            method="post"
                          >
                            <div>
                              <input
                                type="hidden"
                                name="id_customer"
                                defaultValue=""
                              />
                              <div className="form-group row">
                                <input
                                  className="form-control"
                                  name="firstname"
                                  type="text"
                                  placeholder="Full name"
                                />
                              </div>
                              <div className="form-group row">
                                <input
                                  className="form-control"
                                  name="email"
                                  type="email"
                                  placeholder="Email"
                                />
                              </div>
                              <div className="form-group row">
                                <input
                                  className="form-control"
                                  name="email"
                                  type="email"
                                  placeholder="Phone"
                                />
                              </div>
                              <div className="desc-password">
                                <span className="font-weight-bold">
                                  Create an account
                                </span>
                                <span>(optional)</span>
                                <br />
                                <span className="text-muted">
                                  And save time on your next order!
                                </span>
                              </div>
                              <div className="form-group row">
                                <div className="input-group js-parent-focus">
                                  <input
                                    className="form-control js-child-focus"
                                    name="password"
                                    type="password"
                                    placeholder=" Password"
                                  />
                                </div>
                              </div>
                              <div className="hidden-comment">
                                <div className="form-group row">
                                  <input
                                    className="form-control"
                                    name="birthday"
                                    type="text"
                                    defaultValue=""
                                    placeholder=" Birthdate"
                                  />
                                </div>
                              </div>
                              <div className="form-group row check-input">
                                <span className="custom-checkbox d-inline-flex">
                                  <input
                                    className="check"
                                    name="optin"
                                    type="checkbox"
                                    defaultValue={1}
                                  />
                                  <label className="label-absolute">
                                    Receive offers from our partners
                                  </label>
                                </span>
                              </div>
                              <div className="form-group row">
                                <span className="custom-checkbox d-inline-flex check-input">
                                  <input
                                    className="check"
                                    name="newsletter"
                                    type="checkbox"
                                    defaultValue={1}
                                  />
                                  <label>
                                    Sign up for our newsletter
                                    <br />
                                    <em>
                                      You may unsubscribe at any moment. For
                                      that purpose, please find our contact info
                                      in the legal notice.
                                    </em>
                                  </label>
                                </span>
                              </div>
                            </div>
                            <div className="clearfix">
                              <div className="row">
                                <input
                                  type="hidden"
                                  name="submitCreate"
                                  defaultValue={1}
                                />
                                <button
                                  className="continue btn btn-primary pull-xs-right"
                                  name="continue"
                                  data-link-action="register-new-customer"
                                  type="submit"
                                  value={1}
                                >
                                  Continue
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="checkout-login-form"
                          role="tabpanel"
                        >
                          <form
                            id="login-form"
                            action="#"
                            method="post"
                            className="customer-form"
                          >
                            <div>
                              <input
                                type="hidden"
                                name="back"
                                defaultValue=""
                              />
                              <div className="form-group row">
                                <input
                                  className="form-control"
                                  name="email"
                                  type="email"
                                  placeholder="Email"
                                />
                              </div>
                              <div className="form-group row">
                                <div className="input-group js-parent-focus">
                                  <input
                                    className="form-control js-child-focus js-visible-password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="forgot-password">
                                  <a
                                    href="user-reset-password.html"
                                    rel="nofollow"
                                  >
                                    Forgot your password?
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix">
                              <div className="row">
                                <button
                                  className="continue btn btn-primary pull-xs-right"
                                  name="continue"
                                  data-link-action="sign-in"
                                  type="submit"
                                  value={1}
                                >
                                  Continue
                                </button>
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
