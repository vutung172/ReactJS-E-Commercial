import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebase-config";

export default function ProductManager() {
  const { data: products } = useSelector((s) => s.products);
  const { data: categories } = useSelector((c) => c.categories);
  const dispatch = useDispatch();
  console.log(products)

  const [current, setCurrent] = useState({});

  const [isMount, setIsMount] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (isMount) {
      dispatch({ type: "CATEGORY_FECTH" });
      dispatch({ type: "PRODUCT_FECTH" });
    } else {
      setIsMount(true);
    }
  }, [isMount]);

  const handleOnchange = (evt) => {
    switch (evt.target.type) {
      case "text":
        setCurrent({ ...current, [evt.target.name]: evt.target.value });
        break;
      case "number":
        setCurrent({
          ...current,
          [evt.target.name]: parseInt(evt.target.value),
        });
        break;
      case "file":
        console.log(evt.target.files[0]);
        setCurrent({ ...current, [evt.target.name]: evt.target.files[0] });
        break;
      default:
        setCurrent({ ...current, [evt.target.name]: evt.target.value });
        break;
    }
    console.log(evt.target.name);
    console.log(evt.target);
  };

  const handleSave = async () => {
    let imageUrlUploaded = "";
    if (current.image) {
      // Đường dẫn lưu file
      let path = `/filesUpload/Products/IMG/${current.image.name}`;
      // Tạo tham chiếu đến storage lưu trữ file
      const storageRef = ref(storage, path);
      // Tải file lên
      let response = await uploadBytes(storageRef, current.image);
      // Lấy đường dẫn
      imageUrlUploaded = await getDownloadURL(response.ref);
      //setImgUrl(imageUrlUploaded);
    }
    if (isEdit) {
      setCurrent({ ...current,image: imageUrlUploaded });
      dispatch({
        type: "PRODUCT_PUT",
        payload: { ...current, image: imageUrlUploaded },
      });
    } else {
      let id = uuidv4();
      setCurrent({ ...current, id: id, image: imageUrlUploaded });
      dispatch({
        type: "PRODUCT_POST",
        payload: { ...current, id: id, image: imageUrlUploaded },
      });
    }
  };

  const handleEdit = (product) => {
    setIsEdit(true);
    setCurrent({ ...product });
  };

  const handleCancel = () => {
    setIsEdit(false);
    setCurrent({});
  };

  const handleDelete = (id) => {
    setCurrent({ ...current });
    dispatch({ type: "PRODUCT_DELETE", payload: { ...current, id: id } });
  };

  return (
    <section className="content">
      <div className="">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card">
                <div className="header">
                  <h2>Product Management {uuidv4()} </h2>
                </div>
                <div className="body">
                  <div className="row">
                    {/* Product input */}
                    <div className="col-md-6">
                      <div className="form-group form-float">
                        <label htmlFor="productName">Product Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          required=""
                          aria-required="true"
                          aria-invalid="true"
                          onChange={handleOnchange}
                          value={current?.name || ""}
                        />
                        {/* <label id="name-error" className="error" htmlFor="productName">
                        This field is required.
                      </label> */}
                      </div>
                    </div>
                    {/* Price input */}
                    <div className="col-md-6">
                      <div className="form-group form-float">
                        <label htmlFor="name">Product Price</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                          name="price"
                          required=""
                          aria-required="true"
                          aria-invalid="true"
                          onChange={handleOnchange}
                          value={current?.price || ""}
                        />
                        {/* <label id="name-error" className="error" htmlFor="price">
                        This field is required.
                      </label> */}
                      </div>
                    </div>
                    {/* Categories input */}
                    <div className="col-md-6">
                      <div className="">
                        <label htmlFor="">Product Categories</label>
                        <select
                          className="form-select select2-container form-control show-tick ms"
                          // aria-label="Default select example"
                          name="categoryId"
                          onChange={handleOnchange}
                          id=""
                          // value={current?.categoryId}
                        >
                          <option value="">Categories option</option>
                          {categories.map((c) => (
                            <option
                              key={c.id}
                              value={c.id}
                              // selected={c.id == current.categoryId}
                            >
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* Discount input */}
                    <div className="col-md-6">
                      <div className="form-group form-float">
                        <label htmlFor="discount">Product Discount</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Discount"
                          name="discount"
                          required=""
                          aria-required="true"
                          aria-invalid="true"
                          onChange={handleOnchange}
                          value={current?.discount || ""}
                        />
                      </div>
                    </div>
                    {/* Imgae input */}
                    <div className="col-md-6">
                      <div className="card">
                        <label htmlFor="image">Image Input</label>
                        <div className="body">
                          <input
                            type="file"
                            id="dropify-event"
                            name="image"
                            onChange={handleOnchange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {isEdit && (
                        <div className="card img-fluid">
                          <label htmlFor="currentImage">
                            Current Product Image
                          </label>
                          <br />
                          <img className="img-thumbnail rounded mx-auto d-block"
                            src={current.image}
                            alt="..."
                            name="currentImage"
                          />
                        </div>
                      )}
                    </div>
                    <input
                      type="hidden"
                      name="id"
                      onChange={handleOnchange}
                      value={current?.id || ""}
                    />
                    <div className="col-md-12">
                      <button
                        type="button"
                        className={
                          isEdit
                            ? "btn btn-raised btn-success btn-round waves-light-green"
                            : "btn btn-raised btn-primary btn-round waves-light-blue"
                        }
                        onClick={handleSave}
                      >
                        Submit
                      </button>
                      {isEdit && (
                        <button
                          className="btn btn-default btn-round waves-effect btn-raised"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover dataTable js-exportable">
                      <thead>
                        <tr>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Image</th>
                          <th>Price</th>
                          <th>Discount</th>
                          <th>Category</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tfoot hidden>
                        <tr>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Image</th>
                          <th>Price</th>
                          <th>Discount</th>
                          <th>Category</th>
                          <th>Action</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {products.map((p) => (
                          <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td width="2 rem">
                              <img
                                className="img-thumbnail rounded mx-auto d-block"
                                src={p.image}
                                alt="thumbail"
                                width={80}
                              />
                            </td>
                            <td>{p.price}</td>
                            <td>{p.discount}</td>
                            <td>{p.categoryId}</td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={(e) => handleEdit(p)}
                              >
                                Update
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={(e) => handleDelete(p.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
