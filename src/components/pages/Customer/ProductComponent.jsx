import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAct} from "../../../redux/slice/cartSlice"
import { Link } from 'react-router-dom';

export default function ProductComponent() {
  const { data: products } = useSelector((s) => s.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "PRODUCT_FECTH" });
  }, []);

  const handleAddToCart = (pro) => {
    dispatch(cartAct.addToCart(pro));
    }

  return (
    <>
      {/* Main content */}
      <div className="main-content">
        <div id="wrapper-site">
          <div id="content-wrapper" className="full-width">
            <div id="main">
              <div className="page-home">
                {/* breadcrumb */}
                {/* <nav className="breadcrumb-bg">
                  <div className="container no-index">
                    <div className="breadcrumb">
                      <ol>
                        <li>
                          <a href="#">
                            <span>Home</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Living Room</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Sofa</span>
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </nav> */}
                <div className="container">
                  <div className="content">
                    <div className="row">
                      <div className="sidebar-3 sidebar-collection col-lg-3 col-md-4 col-sm-4">
                        {/* category menu */}
                        <div className="sidebar-block">
                          <div className="title-block">Categories</div>
                          <div className="block-content">
                            <div className="cateTitle hasSubCategory open level1">
                              <span
                                className="arrow collapsed collapse-icons"
                                data-toggle="collapse"
                                data-target="#livingroom"
                                aria-expanded="false"
                                role="status"
                              >
                                <i className="zmdi zmdi-minus" />
                                <i className="zmdi zmdi-plus" />
                              </span>
                              <a className="cateItem" href="#">
                                Living Room
                              </a>
                              <div
                                className="subCategory collapse"
                                id="livingroom"
                                aria-expanded="true"
                                role="status"
                              >
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    Side Table
                                  </a>
                                  <div
                                    className="subCategory collapse"
                                    id="subCategory-fruits"
                                    aria-expanded="true"
                                    role="status"
                                  >
                                    <div className="cateTitle">
                                      <a href="#" className="cateItem">
                                        Side Table
                                      </a>
                                    </div>
                                    <div className="cateTitle">
                                      <a href="#" className="cateItem">
                                        FIREPLACE
                                      </a>
                                    </div>
                                    <div className="cateTitle">
                                      <a href="#" className="cateItem">
                                        FIREPLACE
                                      </a>
                                    </div>
                                    <div className="cateTitle">
                                      <a href="#" className="cateItem">
                                        floor lamp
                                      </a>
                                    </div>
                                    <div className="cateTitle">
                                      <a href="#" className="cateItem">
                                        ottoman
                                      </a>
                                    </div>
                                    <div className="cateTitle">
                                      <a href="#" className="cateItem">
                                        armchair
                                      </a>
                                    </div>
                                    <div className="cateTitle">
                                      <a href="#" className="cateItem">
                                        cushion
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    FIREPLACE
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    FIREPLACE
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    floor lamp
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    ottoman
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    armchair
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    cushion
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="cateTitle hasSubCategory open level1">
                              <span
                                className="arrow collapsed collapse-icons"
                                data-toggle="collapse"
                                data-target="#bathroom"
                                aria-expanded="false"
                                role="status"
                              >
                                <i className="zmdi zmdi-minus" />
                                <i className="zmdi zmdi-plus" />
                              </span>
                              <a className="cateItem" href="#">
                                Bathroom
                              </a>
                              <div
                                className="subCategory collapse"
                                id="bathroom"
                                aria-expanded="false"
                                role="status"
                              >
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    TOMATO
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    BROCCOLI
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    CABBAGE
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    CUCUMBER
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    EGGPLANT
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="cateTitle hasSubCategory open level1">
                              <span
                                className="arrow collapsed collapse-icons"
                                data-toggle="collapse"
                                data-target="#diningroom"
                                aria-expanded="false"
                                role="status"
                              >
                                <i className="zmdi zmdi-minus" />
                                <i className="zmdi zmdi-plus" />
                              </span>
                              <a className="cateItem" href="#">
                                Dining Rooom
                              </a>
                              <div
                                className="subCategory collapse"
                                id="diningroom"
                                aria-expanded="true"
                                role="status"
                              >
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    DRY BREAD
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    BREAD SLICES
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    FRENCH BREAD
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    BLACK BREAD
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="cateTitle hasSubCategory open level1">
                              <span
                                className="arrow collapsed collapse-icons"
                                data-toggle="collapse"
                                data-target="#bedroom"
                                aria-expanded="false"
                                role="status"
                              >
                                <i className="zmdi zmdi-minus" />
                                <i className="zmdi zmdi-plus" />
                              </span>
                              <a className="cateItem" href="#">
                                BedRoom
                              </a>
                              <div
                                className="subCategory collapse"
                                id="bedroom"
                                aria-expanded="true"
                                role="status"
                              >
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    ORANGE JUICES
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    TOMATO JUICES
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    APPLE JUICES
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="cateTitle hasSubCategory open level1">
                              <span
                                className="arrow collapsed collapse-icons"
                                data-toggle="collapse"
                                data-target="#kitchen"
                                aria-expanded="false"
                                role="status"
                              >
                                <i className="zmdi zmdi-minus" />
                                <i className="zmdi zmdi-plus" />
                              </span>
                              <a className="cateItem" href="#">
                                Kitchen
                              </a>
                              <div
                                className="subCategory collapse"
                                id="kitchen"
                                aria-expanded="true"
                                role="status"
                              >
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    ORANGE JUICES
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    TOMATO JUICES
                                  </a>
                                </div>
                                <div className="cateTitle">
                                  <a href="#" className="cateItem">
                                    APPLE JUICES
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* best seller */}
                        <div className="sidebar-block">
                          <div className="title-block">Catalog</div>
                          <div className="new-item-content">
                            <h3 className="title-product">categories</h3>
                            <ul className="scroll-product">
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>side table</b>
                                  <span className="quantity">(30)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>floor lamp</b>
                                  <span className="quantity">(32)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>ottoman</b>
                                  <span className="quantity">(67)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>armchair</b>
                                  <span className="quantity">(15)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>ottoman</b>
                                  <span className="quantity">(24)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>CUSHION</b>
                                  <span className="quantity">(20)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>Pineapple</b>
                                  <span className="quantity">(21)</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="new-item-content">
                            <h3 className="title-product">Manufacture</h3>
                            <ul className="scroll-product">
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>Samsung</b>
                                  <span className="quantity">(30)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>Dell</b>
                                  <span className="quantity">(30)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>Polygon</b>
                                  <span className="quantity">(30)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>Newment</b>
                                  <span className="quantity">(30)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>Asus</b>
                                  <span className="quantity">(30)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>Mac</b>
                                  <span className="quantity">(30)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>Vaio</b>
                                  <span className="quantity">(30)</span>
                                </a>
                              </li>
                              <li>
                                <label className="check">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <a href="#">
                                  <b>Lettuce</b>
                                  <span className="quantity">(30)</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="tiva-filter-price new-item-content sidebar-block">
                            <h3 className="title-product">By Price</h3>
                            <div id="block_price_filter" className="block">
                              <div className="block-content">
                                <div id="slider-range" className="tiva-filter">
                                  <div className="filter-itemprice-filter">
                                    <div className="layout-slider">
                                      <input
                                        id="price-filter"
                                        name="price"
                                        defaultValue="0;100"
                                      />
                                    </div>
                                    <div className="layout-slider-settings" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sidebar-block by-color">
                            <h3 className="title-product">By Color</h3>
                            <div>
                              <span className="left">
                                <label className="color-item1" />
                                <a href="#">
                                  <span>
                                    Blue
                                    <span>(30)</span>
                                  </span>
                                </a>
                              </span>
                              <span className="right">
                                <label className="color-item2" />
                                <a href="#">
                                  <span>
                                    Green
                                    <span>(30)</span>
                                  </span>
                                </a>
                              </span>
                            </div>
                            <div>
                              <span className="left">
                                <label className="color-item3" />
                                <a href="#">
                                  <span>
                                    Yellow
                                    <span>(30)</span>
                                  </span>
                                </a>
                              </span>
                              <span className="right">
                                <label className="color-item4" />
                                <a href="#">
                                  <span>
                                    Brown
                                    <span>(30)</span>
                                  </span>
                                </a>
                              </span>
                            </div>
                            <div>
                              <span className="left">
                                <label className="color-item5" />
                                <a href="#">
                                  <span>
                                    Pink
                                    <span>(30)</span>
                                  </span>
                                </a>
                              </span>
                              <span className="right">
                                <label className="color-item6" />
                                <a href="#">
                                  <span>
                                    Red
                                    <span>(30)</span>
                                  </span>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* product tag */}
                        <div className="sidebar-block product-tags">
                          <div className="title-block">Product Tags</div>
                          <div className="block-content">
                            <ul className="listSidebarBlog list-unstyled">
                              <li>
                                <a
                                  href="#"
                                  title="Show products matching tag Hot Trend"
                                >
                                  Hot Trend
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Show products matching tag Jewelry"
                                >
                                  Jewelry
                                </a>
                              </li>
                              <li>
                                <a
                                  href="man.html"
                                  title="Show products matching tag Man"
                                >
                                  Man
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Show products matching tag Party"
                                >
                                  Party
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Show products matching tag SamSung"
                                >
                                  SamSung
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Show products matching tag Shirt Dresses"
                                >
                                  Shirt Dresses
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Show products matching tag Shoes"
                                >
                                  Shoes
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Show products matching tag Summer"
                                >
                                  Summer
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Show products matching tag Sweaters"
                                >
                                  Sweaters
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Show products matching tag Winter"
                                >
                                  Winter
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Show products matching tag Woman"
                                >
                                  Woman
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Product List */}
                      <div className="col-sm-8 col-lg-9 col-md-8 product-container">
                        <h1>Product List</h1>
                        <div className="js-product-list-top firt nav-top">
                          <div className="d-flex justify-content-around row">
                            <div className="col col-xs-12">
                              <ul className="nav nav-tabs">
                                <li>
                                  <a
                                    href="#grid"
                                    data-toggle="tab"
                                    className="active show fa fa-th-large"
                                  />
                                </li>
                                <li>
                                  <a
                                    href="#list"
                                    data-toggle="tab"
                                    className="fa fa-list-ul"
                                  />
                                </li>
                              </ul>
                              <div className="hidden-sm-down total-products">
                                <p>There are 12 products.</p>
                              </div>
                            </div>
                            <div className="col col-xs-12">
                              <div className="d-flex sort-by-row justify-content-lg-end justify-content-md-end">
                                <div className="products-sort-order dropdown">
                                  <select className="select-title">
                                    <option value="">Sort by</option>
                                    <option value="">Name, A to Z</option>
                                    <option value="">Name, Z to A</option>
                                    <option value="">Price, low to high</option>
                                    <option value="">Price, high to low</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content product-items">
                          <div
                            id="grid"
                            className="related tab-pane fade in active show"
                          >
                            <div className="row">
                              {products.map((p) => (
                                <div
                                  className="item text-center col-md-4"
                                  key={p.id}
                                >
                                  <div className="product-miniature js-product-miniature item-one first-item">
                                    <div className="thumbnail-container border">
                                      <a href="product-detail.html">
                                        <img
                                          className="img-fluid image-cover"
                                          src={p.image}
                                          alt="img"
                                        />
                                      </a>
                                      {/* <div className="highlighted-informations">
                                        <div className="variant-links">
                                          <a
                                            href="#"
                                            className="color beige"
                                            title="Beige"
                                          ></a>
                                          <a
                                            href="#"
                                            className="color orange"
                                            title="Orange"
                                          ></a>
                                          <a
                                            href="#"
                                            className="color green"
                                            title="Green"
                                          ></a>
                                        </div>
                                        <a
                                          href="#"
                                          className="color green"
                                          title="Green"
                                        ></a>
                                      </div> */}
                                      {/* <a
                                        href="#"
                                        className="color green"
                                        title="Green"
                                      ></a> */}
                                    </div>
                                    {/* <a
                                      href="#"
                                      className="color green"
                                      title="Green"
                                    ></a> */}
                                    <div className="product-description">
                                      {/* <a
                                        href="#"
                                        className="color green"
                                        title="Green"
                                      ></a> */}
                                      <div className="product-groups">
                                        {/* <a
                                          href="#"
                                          className="color green"
                                          title="Green"
                                        ></a>
                                        <div className="product-title">
                                          <a
                                            href="#"
                                            className="color green"
                                            title="Green"
                                          ></a> */}
                                          <a href="product-detail.html">
                                            {p.name}
                                          </a>
                                        </div>
                                        <div className="rating">
                                          <div className="star-content">
                                            <div className="star">
                                              <div className="star">
                                                <div className="star">
                                                  <div className="star">
                                                    <div className="star"></div>
                                                  </div>
                                                  <div className="product-group-price">
                                                    <div className="product-price-and-shipping">
                                                      <span className="price">
                                                        £{p.price}
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="product-buttons d-flex justify-content-center">
                                                  <form
                                                    action="#"
                                                    method="post"
                                                    className="formAddToCart"
                                                  >
                                                    <input
                                                      type="hidden"
                                                      name="id_product"
                                                      
                                                    />
                                                    <a
                                                      className="add-to-cart"
                                                      href="#"
                                                      onClick={e => {e.preventDefault();handleAddToCart(p)}}
                                                    >
                                                      <i
                                                        className="fa fa-shopping-cart"
                                                        aria-hidden="true"
                                                      ></i>
                                                    </a>
                                                    <i
                                                      className="fa fa-shopping-cart"
                                                      aria-hidden="true"
                                                    >
                                                      <a
                                                        className="addToWishlist"
                                                        href="#"
                                                        data-rel="{1}"
                                                      >
                                                        <i
                                                          className="fa fa-heart"
                                                          aria-hidden="true"
                                                        ></i>
                                                      </a>
                                                      <i
                                                        className="fa fa-heart"
                                                        aria-hidden="true"
                                                      >
                                                        <a
                                                          href="#"
                                                          className="quick-view hidden-sm-down"
                                                          data-link-action="quickview"
                                                        >
                                                          <i
                                                            className="fa fa-eye"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <i
                                                          className="fa fa-eye"
                                                          aria-hidden="true"
                                                        ></i>
                                                      </i>
                                                    </i>
                                                  </form>
                                                </div>
                                                {/* <i
                                                  className="fa fa-shopping-cart"
                                                  aria-hidden="true"
                                                >
                                                  <i
                                                    className="fa fa-heart"
                                                    aria-hidden="true"
                                                  >
                                                    <i
                                                      className="fa fa-eye"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </i>
                                                </i> */}
                                              </div>
                                              <i
                                                className="fa fa-shopping-cart"
                                                aria-hidden="true"
                                              >
                                                <i
                                                  className="fa fa-heart"
                                                  aria-hidden="true"
                                                >
                                                  <i
                                                    className="fa fa-eye"
                                                    aria-hidden="true"
                                                  ></i>
                                                </i>
                                              </i>
                                            </div>
                                            <i
                                              className="fa fa-shopping-cart"
                                              aria-hidden="true"
                                            >
                                              <i
                                                className="fa fa-heart"
                                                aria-hidden="true"
                                              >
                                                <i
                                                  className="fa fa-eye"
                                                  aria-hidden="true"
                                                ></i>
                                              </i>
                                            </i>
                                          </div>
                                          <i
                                            className="fa fa-shopping-cart"
                                            aria-hidden="true"
                                          >
                                            <i
                                              className="fa fa-heart"
                                              aria-hidden="true"
                                            >
                                              <i
                                                className="fa fa-eye"
                                                aria-hidden="true"
                                              ></i>
                                            </i>
                                          </i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                // </div>
                              ))}
                            </div>
                          </div>
                          <div id="list" className="related tab-pane fade">
                            <div className="row">
                              {products.map(p => (<div className="item col-md-12" key={p.id}>
                                <div className="product-miniature item-one first-item">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="thumbnail-container border">
                                        <a href="product-detail.html">
                                          <img
                                            className="img-fluid image-cover"
                                            src={p.image}
                                            alt="img"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col-md-8">
                                      <div className="product-description">
                                        <div className="product-groups">
                                          <div className="product-title">
                                            <Link to={'product/${p.id}'} >
                                              {p.name}
                                            </Link>
                                            <span className="info-stock">
                                              <i
                                                className="fa fa-check-square-o"
                                                aria-hidden="true"
                                              />
                                              In Stock
                                            </span>
                                          </div>
                                          <div className="rating">
                                            <div className="star-content">
                                              <div className="star" />
                                              <div className="star" />
                                              <div className="star" />
                                              <div className="star" />
                                              <div className="star" />
                                            </div>
                                          </div>
                                          <div className="product-group-price">
                                            <div className="product-price-and-shipping">
                                              <span className="price">
                                                £{p.price}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="discription">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Etiam
                                            ultricies eget velit vitae bibendum.
                                            Cras condimentum libero a lectus
                                            ultricies...
                                          </div>
                                        </div>
                                        <div className="product-buttons d-flex">
                                          <form
                                            action="#"
                                            method="post"
                                            className="formAddToCart"
                                          >
                                            <a
                                              className="add-to-cart"
                                              href="#"
                                              data-button-action="add-to-cart"
                                              onClick={e => {e.preventDefault();handleAddToCart(p)}}
                                            >
                                              <i
                                                className="fa fa-shopping-cart"
                                                aria-hidden="true"
                                              />
                                              Add to cart
                                            </a>
                                          </form>
                                          <a
                                            className="addToWishlist"
                                            href="#"
                                            data-rel={1}
                                            onClick=""
                                          >
                                            <i
                                              className="fa fa-heart"
                                              aria-hidden="true"
                                            />
                                          </a>
                                          <a
                                            href="#"
                                            className="quick-view hidden-sm-down"
                                            data-link-action="quickview"
                                          >
                                            <i
                                              className="fa fa-eye"
                                              aria-hidden="true"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>) )}
                            </div>
                          </div>
                        </div>
                        {/* pagination */}
                        <div className="pagination">
                          <div className="js-product-list-top ">
                            <div className="d-flex justify-content-around row">
                              <div className="showing col col-xs-12">
                                <span>SHOWING 1-{products.length} OF {products.length} ITEM(S)</span>
                              </div>
                              <div className="page-list col col-xs-12">
                                <ul>
                                  <li>
                                    <a
                                      rel="prev"
                                      href="#"
                                      className="previous disabled js-search-link"
                                    >
                                      Previous
                                    </a>
                                  </li>
                                  <li className="current active">
                                    <a
                                      rel="nofollow"
                                      href="#"
                                      className="disabled js-search-link"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="nofollow"
                                      href="#"
                                      className="disabled js-search-link"
                                    >
                                      2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="nofollow"
                                      href="#"
                                      className="disabled js-search-link"
                                    >
                                      3
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="next"
                                      href="#"
                                      className="next disabled js-search-link"
                                    >
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end col-md-9-1 */}
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
