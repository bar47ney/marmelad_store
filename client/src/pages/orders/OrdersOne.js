import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";
import { NavLink } from "react-router-dom";
import NotFound from "../NotFound";
import { editorder } from "../../components/reducer/reducer";
import Context from "../../context/context";
import { Link } from "react-router-dom";

const OrdersOne = (props) => {
  const [error, setError] = useState();
  const { id } = useParams();
  const orderCrud = new Crud("order");
  const [order, setOrder] = useState({});
  const [viewSpinner, setViewSpinner] = useState(true);
  const [viewEditForm, setViewEditForm] = useState(false);

  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = () => {
    setViewSpinner(true);
    orderCrud
      .getOneById(`${id}`)
      .then((res) => {
        setOrder(res.data);
        console.log(res.data);
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
          {order &&
            Object.keys(order).map((field, index) => {
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
                    value={order[field]}
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
        <div
          className="card m-5 mx-auto"
          style={{ width: "18rem" }}
        >
          <img
            src={`${process.env.REACT_APP_MARMELAD_STORE_API_URL}${order.product.img}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Номер заказа: {order.order.id}</h5>
            <p className="card-text">
              Покупатель:&nbsp;
              <Link to={`/customers/${order.customer.id}`}>
                {order.customer.name}
              </Link>
            </p>
            <p className="card-text">
              Заказан продукт:&nbsp;
              <Link to={`/product/${order.product.id}`}>
                {order.product.name}
              </Link>
            </p>
            <p className="card-text">
              Состояние заказа: {order.order.isPay ? "Оплачен" : "Не оплачен"}
            </p>
            <p className="card-text">
              Общая сумма: {order.order.totalPrice} BYN
            </p>
            <NavLink to="/orders" className="btn btn-primary">
              Назад
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
      )}
    </>
  );
};

export default OrdersOne;
