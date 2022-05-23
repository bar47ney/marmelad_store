import React, { useEffect, useState, useRef } from "react";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";

const Orders = () => {
  const ordersCrud = new Crud("order");
  const [orders, setOrders] = useState([]);
  const [viewSpinner, setViewSpinner] = useState(false);

  console.log(orders);

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const fetchAllOrders = () => {
    setViewSpinner(true);
    ordersCrud.getAll().then((res) => {
      console.log(res.data.rows);
      setOrders(res.data.rows);
      setViewSpinner(false);
    });
  };

  return (
    <>
      {viewSpinner ? (
        <Spinner />
      ) : (
          <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.length ? (
              orders.map((order, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/order/${order.id}`}>{order.id}</Link>
                  </td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPay}</td>
                  <td>{order.customerId}</td>
                  <td>
                    <button
                    //   onClick={() => deleteThisUser(order)}
                      className="btn btn-primary btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <h3 className="mt-3">Not found users</h3>
            )}
          </tbody>
        </table>
        </div>
      )}
    </>
  );
};

export default Orders;
