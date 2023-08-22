import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <>
        {/* footer */}
        <footer className="footer-one">
          <div className="inner-footer">
            <div className="container">
              <div className="footer-top col-lg-12 col-xs-12">
                <div className="row">
                  <div className="tiva-html col-lg-4 col-md-12 col-xs-12">
                    <div className="block">
                      <div className="block-content">
                        <p className="logo-footer">
                          <img src="img/home/logo.png" alt="img" />
                        </p>
                        <p className="content-logo">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </p>
                      </div>
                    </div>
                    <div className="block">
                      <div className="block-content">
                        <ul>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Reasons to shop</a>
                          </li>
                          <li>
                            <a href="#">What our customers say</a>
                          </li>
                          <li>
                            <a href="#">Meet the teaml</a>
                          </li>
                          <li>
                            <a href="#">Contact our buyers</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="block">
                      <div className="block-content">
                        <p className="img-payment ">
                          <img
                            className="img-fluid"
                            src="img/home/payment-footer.png"
                            alt="img"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tiva-html col-lg-4 col-md-6">
                    <div className="block m-top">
                      <div className="title-block">Contact Us</div>
                      <div className="block-content">
                        <div className="contact-us">
                          <div className="title-content">
                            <i className="fa fa-home" aria-hidden="true" />
                            <span>Address :</span>
                          </div>
                          <div className="content-contact address-contact">
                            <p>
                              123 Suspendis matti, Visaosang Building VST
                              District NY Accums, North American
                            </p>
                          </div>
                        </div>
                        <div className="contact-us">
                          <div className="title-content">
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <span>Email :</span>
                          </div>
                          <div className="content-contact mail-contact">
                            <p>support@domain.com</p>
                          </div>
                        </div>
                        <div className="contact-us">
                          <div className="title-content">
                            <i className="fa fa-phone" aria-hidden="true" />
                            <span>Hotline :</span>
                          </div>
                          <div className="content-contact phone-contact">
                            <p>+0012-345-67890</p>
                          </div>
                        </div>
                        <div className="contact-us">
                          <div className="title-content">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            <span>Opening Hours :</span>
                          </div>
                          <div className="content-contact hours-contact">
                            <p>Monday - Sunday / 08.00AM - 19.00</p>
                            <span>(Except Holidays)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tiva-modules col-lg-4 col-md-6">
                    <div className="block m-top">
                      <div className="block-content">
                        <div className="title-block">Newsletter</div>
                        <div className="sub-title">
                          Sign up to our newsletter to get the latest articles,
                          lookbooks voucher codes direct to your inbox
                        </div>
                        <div className="block-newsletter">
                          <form action="#" method="post">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                defaultValue=""
                                placeholder="Enter Your Email"
                              />
                              <span className="input-group-btn">
                                <button
                                  className="effect-btn btn btn-secondary "
                                  name="submitNewsletter"
                                  type="submit"
                                >
                                  <span>subscribe</span>
                                </button>
                              </span>
                            </div>
                            <input
                              type="hidden"
                              name="action"
                              defaultValue={0}
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="block m-top1">
                      <div className="block-content">
                        <div className="social-content">
                          <div className="title-block">Follow us on</div>
                          <div id="social-block">
                            <div className="social">
                              <ul className="list-inline mb-0 justify-content-end">
                                <li className="list-inline-item mb-0">
                                  <a href="#" target="_blank">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="list-inline-item mb-0">
                                  <a href="#" target="_blank">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li className="list-inline-item mb-0">
                                  <a href="#" target="_blank">
                                    <i className="fa fa-google" />
                                  </a>
                                </li>
                                <li className="list-inline-item mb-0">
                                  <a href="#" target="_blank">
                                    <i className="fa fa-instagram" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block m-top1">
                      <div className="block-content">
                        <div className="payment-content">
                          <div className="title-block">Payment accept</div>
                          <div className="payment-image">
                            <img
                              className="img-fluid"
                              src="img/home/payment.png"
                              alt="img"
                            />
                          </div>
                        </div>
                        {/* Popup newsletter */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tiva-copyright">
            <div className="container">
              <div className="row">
                <div className="text-center col-lg-12 ">
                  <span>
                    <Link target="_blank"to={"https://www.templateshub.net"}>
                      Templates Hub
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* back top top */}
        <div className="back-to-top">
          <a href="#">
            <i className="fa fa-long-arrow-up" />
          </a>
        </div>
      </>
    </>
  );
}
