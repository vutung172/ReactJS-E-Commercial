import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAct } from "../../../redux/slice/cartSlice";

export default function ShoppingCart() {
  const carts = useSelector((c) => c.carts);
  const dispatch = useDispatch();

  const handleDeleteItemInCart = (id) => {
    dispatch(cartAct.deleteItemInCart(id));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            id="content-wrapper"
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 onecol"
          >
            <section id="main">
              <div className="cart-grid row">
                <div className="col-md-9 col-xs-12 check-info">
                  <h1 className="title-page">Shopping Cart</h1>
                  <div className="cart-container">
                    <div className="cart-overview js-cart">
                      <ul className="cart-items">
                        {carts.map((c) => (
                          <li className="cart-item" key={c.product.id}>
                            <div className="product-line-grid row justify-content-between">
                              {/*  product left content: image*/}
                              <div className="product-line-grid-left col-md-2">
                                <span className="product-image media-middle">
                                  <a href="product-detail.html">
                                    <img
                                      className="img-fluid"
                                      src={c.product.image}
                                      alt=""
                                    />
                                  </a>
                                </span>
                              </div>
                              <div className="product-line-grid-body col-md-6">
                                <div className="product-line-info">
                                  <Link
                                    to={c.product.id}
                                    className="label"
                                    data-id_customization={0}
                                  >
                                    {c.product.name}
                                  </Link>
                                </div>
                                <div className="product-line-info product-price">
                                  <span className="value">
                                    £{c.product.price}
                                  </span>
                                </div>
                                <div className="product-line-info">
                                  <span className="label-atrr">Discount:</span>
                                  <span className="value text-danger">{c.product.discount}%</span>
                                </div>
                                <div className="product-line-info">
                                  <span className="label-atrr">Color:</span>
                                  <span className="value">Blue</span>
                                </div>
                              </div>
                              <div className="product-line-grid-right text-center product-line-actions col-md-4">
                                <div className="row">
                                  <div className="col-md-5 col qty">
                                    <div className="label">Qty:</div>
                                    <div className="quantity row">
                                      <input
                                        type="text"
                                        name="qty"
                                        defaultValue={c.quantity}
                                        className="input-group form-control"
                                  
                                      />
                                      <span className="input-group-btn-vertical">
                                        <button
                                          className="btn btn-touchspin js-touchspin bootstrap-touchspin-up"
                                          type="button"
                                        >
                                          +
                                        </button>
                                        <button
                                          className="btn btn-touchspin js-touchspin bootstrap-touchspin-down"
                                          type="button"
                                        >
                                          -
                                        </button>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-5 col price">
                                    <div className="label">Total:</div>
                                    <div className="product-price total">
                                      £{c.quantity * c.product.price}
                                    </div>
                                  </div>
                                  <div className="col-md-2 col text-xs-right align-self-end">
                                    <div className="cart-line-product-actions ">
                                      <a
                                        className="remove-from-cart"
                                        rel="nofollow"
                                        href="#"
                                        data-link-action="delete-from-cart"
                                        onClick={() => {
                                          handleDeleteItemInCart(c.product.id);
                                        }}
                                      >
                                        <i
                                          className="fa fa-trash-o"
                                          aria-hidden="true"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link
                    to={"/checkout"}
                    className="continue btn btn-primary pull-xs-right"
                  >
                    Continue
                  </Link>
                </div>
                <div className="cart-grid-right col-xs-12 col-lg-3">
                  <div className="cart-summary">
                    <div className="cart-detailed-totals">
                      <div className="cart-summary-products">
                        <div className="summary-label">
                          There are {carts.length} items in your cart
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
                            src={"../img/product/check1.png"}
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
                            src={"../img/product/check2.png"}
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
                            src={"../img/product/check3.png"}
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
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
