import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function OrderManager() {
  const orderStatus = [
    { key: 1, value: "In processing" },
    { key: 2, value: "In delivered" },
    { key: 3, value: "Completed" },
    { key: -1, value: "Cancel" },
  ];
  const [isMount, setIsMount] = useState(false);

  const { data: orders, orderDetails } = useSelector((s) => s.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMount) {
      dispatch({ type: "ORDER_FECTH" });
    } else {
      setIsMount(true);
    }
  }, [isMount]);

  const handleDetails = (orderId) => {
    dispatch({ type: "ORDER_FECTH_DETAILS", payload: orderId });
  };

  const handleChangeStatus = (order, newStatus) => {
    let initOrder = { ...order, status: parseInt(newStatus) };
    dispatch({ type: "ORDER_UPDATE", payload: initOrder });
  };
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card">
              <div className="header">
                <h2>Order Management </h2>
              </div>
              <div className="body">
                <div className="table-responsive">
                  <div className="row">
                    {/* Customer order */}
                    <div className="col-md-7">
                      <h4>Customer Order</h4>
                      <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                        <thead>
                          <tr>
                            <th>Customer Name</th>
                            <th>E-mail</th>
                            <th>Tel No.</th>
                            <th>Purchased date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tfoot hidden>
                          <tr>
                            <th>Customer Name</th>
                            <th>E-mail</th>
                            <th>Tel No.</th>
                            <th>Purchased date</th>
                            <th>Status</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          {orders.map((o) => (
                            <tr
                              key={o.id}
                              onDoubleClick={(e) => handleDetails(o.id)}
                            >
                              <td>{o.customerName}</td>
                              <td>{o.email}</td>
                              <td>{o.phone}</td>
                              <td>{o.purchasedDate}</td>
                              <td>
                                <select
                                  defaultValue={o.status}
                                  className="form-control"
                                  onChange={(e) =>
                                    handleChangeStatus(o, e.target.value)
                                  }
                                >
                                  {orderStatus.map((x) => (
                                    <option
                                      key={x.key}
                                      value={x.key}
                                      disabled={
                                        x.key < o.status && o.status !== 1
                                      }
                                    >
                                      {x.value}
                                    </option>
                                  ))}
                                </select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Order detail */}
                    <div className="col-md-5">
                      <h4>Order Detail</h4>
                      <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Purchased Quantity</th>
                            <th>Total price</th>
                          </tr>
                        </thead>
                        <tfoot hidden>
                          <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Purchased Quantity</th>
                            <th>Total price</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          {orderDetails.map((x) => (
                            <tr key={x.orderId}>
                              <td>
                                <img
                                  className="img-thumbnail rounded float-start d-block"
                                  src={x.product.image}
                                  alt=""
                                  width={75}
                                />
                                <h6 className="my-3">{x.product.name}</h6>
                              </td>
                              <td>{x.price}</td>
                              <td>{x.quantity}</td>
                              <td>{x.quantity * x.price}</td>
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
      </div>
    </section>
  );
}
