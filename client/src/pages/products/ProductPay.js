import React, { useContext, useState } from "react";
import { addUser } from "../../components/reducer/reducer";
import Context from "../../context/context";
import Crud from "../../service/crud.service";

const ProductPay = ({ closeModal, product }) => {
  const { state, dispatch } = useContext(Context);
  const orderCrud = new Crud("order");

  const onChange = (e) => {
    const field = e.target.id;
    field === "productId" || field === "productQty"
      ? setValues({ ...values, [field]: +e.target.value })
      : setValues({ ...values, [field]: e.target.value });
  };
  const createNewOrder = () => {
    orderCrud
      .create(values)
      .then((res) => {
        setValues({
          name: "",
          phone: "",
          email: "",
          productId: product.id,
          productQty: 0,
        });
        closeModal();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    productId: product.id,
    productQty: 0,
  });

  console.log(values);

  return (
    <>
      {Object.keys(values).map((value, index) => {
        if (value !== "productId") {
          return (
            <div class="form-floating" key={index}>
              <input
                id={value}
                value={values[value]}
                placeholder={`Введите ${value}`}
                onChange={onChange}
                className="mb-1 form-control"
              />
              <label className="" for="floatingPassword">{value}</label>
            </div>

            // <div className="" key={index}>
            //   <input
            //     id={value}
            //     value={values[value]}
            //     placeholder={`Введите ${value}`}
            //     onChange={onChange}
            //     className="mb-1 form-control"
            //   />
            // </div>
          );
        }
      })}
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary mt-2 btn-sm"
            onClick={createNewOrder}
          >
            Отправить
          </button>
        </div>
        <div className="col">
          <p>Итого сумма заказа BYN: {product.price * values.productQty}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPay;
