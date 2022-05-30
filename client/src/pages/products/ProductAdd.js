import React, { useContext, useState } from "react";
import { addUser } from "../../components/reducer/reducer";
import Context from "../../context/context";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";

const ProductAdd = ({ closeModal }) => {
  const productCrud = new Crud("product");

  const [viewSpinner, setViewSpinner] = useState(false);
  const [formDataState, setFormDataState] = useState(null);

  const onChange = (e) => {
    const field = e.target.id;
    field === "price"
      ? setValues({ ...values, [field]: +e.target.value })
      : setValues({ ...values, [field]: e.target.value });
  };

  const selectFile = (e) => {
    setValues({ ...values, ["img"]: e.target.files[0] });
  };

  const createFormData = () => {
    const formData = new FormData();
    formData.append(`name`, values.name);
    formData.append(`party`, values.party);
    formData.append(`productCode`, values.productCode);
    formData.append(`typeProduct`, values.typeProduct);
    formData.append(`brandProduct`, values.brandProduct);
    formData.append(`price`, `${values.price}`);
    formData.append(`img`, values.img);
    formData.append(`title`, values.title);
    formData.append(`description`, values.description);
    return formData;
  };

  const createNewProduct = () => {
    setViewSpinner(true);
    productCrud
      .create(createFormData())
      .then((res) => {
        setValues({
          name: "",
          party: "",
          productCode: "",
          typeProduct: "",
          brandProduct: "",
          price: 0,
          img: null,
          title: "",
          description: "",
        });
        console.log(res.data.order);
        alert(`Ваш товар создан!`);
        setViewSpinner(false);
        closeModal();
      })
      .catch((e) => {
        console.log(e);
        alert(e);
        setViewSpinner(false);
      });
  };
  const [values, setValues] = useState({
    name: "",
    party: "",
    productCode: "",
    typeProduct: "",
    brandProduct: "",
    price: 0,
    img: null,
    title: "",
    description: "",
  });

  console.log(values);

  return (
    <>
      {Object.keys(values).map((value, index) => {
        if (value === "img") {
          return (
            <div class="" key={index}>
              <input
                id={value}
                onChange={selectFile}
                className="mb-1 form-control"
                type="file"
              />
            </div>
          );
        } else {
          return (
            <div class="form-floating" key={index}>
              <input
                id={value}
                value={values[value]}
                placeholder={`Введите ${value}`}
                onChange={onChange}
                className="mb-1 form-control"
              />
              <label className="" for="floatingPassword">
                {value}
              </label>
            </div>
          );
        }
      })}
      <div className="row">
        <div className="col">
          {viewSpinner ? (
            <Spinner />
          ) : (
            <button
              className="btn btn-primary mt-2 btn-sm"
              onClick={() => createNewProduct()}
            >
              Создать
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
