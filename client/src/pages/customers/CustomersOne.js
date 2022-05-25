import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";
import { NavLink } from "react-router-dom";
import NotFound from "../NotFound";
import { editcustomer } from "../../components/reducer/reducer";
import Context from "../../context/context";
import Customers from "./Customers";
import Orders from "../orders/Orders";
import { Link } from "react-router-dom";

const CustomerOne = (props) => {
  const [error, setError] = useState();
  const { id } = useParams();
  const ordersCrud = new Crud("order");
  const customersCrud = new Crud("customer");
  const [customer, setCustomer] = useState({});
  const [viewSpinner, setViewSpinner] = useState(false);
  const [viewEditForm, setViewEditForm] = useState(false);
  const [ordersCusomer, setOrdersCustomer] = useState([])

  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    getCustomer();
    getOrderCustomer()
  }, []);

  const getOrderCustomer = () => {
    setViewSpinner(true);
    ordersCrud
      .getAllByExample("customer",`${id}`)
      .then((res) => {
        setOrdersCustomer(res.data);
        setViewSpinner(false);
      })
      .catch((err) => {
        setError(err);
        setViewSpinner(false);
      });
  };

  const getCustomer = () => {
    setViewSpinner(true);
    customersCrud
      .getOneById(`${id}`)
      .then((res) => {
        setCustomer(res.data);
        setViewSpinner(false);
      })
      .catch((err) => {
        setError(err);
        setViewSpinner(false);
      });
  };

  return (
    <>
      {viewSpinner ? (
        <Spinner />
      ) : error ? (
        <NotFound title={error.message} />
      ) : viewEditForm ? (
        <form className="container m-5 col-6" onSubmit>
          {customer &&
            Object.keys(customer).map((field, index) => {
              if (field === "id" || field === "address" || field === "company")
                return;
              return (
                <div className="mb-3" key={index}>
                  <label htmlFor={field} className="form-label">
                    {field}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={customer[field]}
                    id={field}
                    onChange
                  />
                </div>
              );
            })}
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      ) : (
        <div className="container">
          <div className="card m-5 mx-auto" style={{ width: "18rem" }}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Покупатель: {customer.name}</h5>
              <p className="card-text">Почта: {customer.email}</p>
              <p className="card-text">Телефон: {customer.phone}</p>
              <p className="card-text">Пол: {customer.gender}</p>
              <p className="card-text">Возраст: {customer.age}</p>
              <NavLink to="/customers" className="btn btn-primary">
                Back to customers
              </NavLink>
              <button
                type="submit"
                className="btn btn-primary m-1"
                onClick={() => setViewEditForm(true)}
              >
                Edit
              </button>
            </div>
          </div>
          <h2>Заказы {customer.name}</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Номер заказа</th>
                <th>Номер покупателя</th>
                <th>Общая сумма заказа BYN</th>
                <th>Статус оплаты</th>
              </tr>
            </thead>
            <tbody>
              {ordersCusomer.length ? (
                ordersCusomer.map((orderCusomer, index) => (
                  <tr key={index}>
                    <td>
                      <Link to={`/order/${orderCusomer.id}`}>{orderCusomer.id}</Link>
                    </td>
                    <td>
                      <Link to={`/customers/${orderCusomer.customerId}`}>
                        {orderCusomer.customerId}
                      </Link>
                    </td>
                    <td>{orderCusomer.totalPrice}</td>
                    <td>
                      <button
                        className={
                          orderCusomer.isPay
                            ? "text-success btn btn-sm"
                            : "text-danger btn btn-sm"
                        }
                      >
                        {orderCusomer.isPay ? "Оплачен" : "Не оплачен"}
                        {console.log(orderCusomer)}
                      </button>
                    </td>
                    {/* <td>
                      <button
                        //   onClick={() => deleteThisUser(order)}
                        className="btn btn-primary btn-sm"
                      >
                        Delete
                      </button>
                    </td> */}
                  </tr>
                ))
              ) : (
                <h3 className="mt-3">Нет заказов</h3>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CustomerOne;
