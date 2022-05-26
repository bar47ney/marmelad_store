import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";
import { NavLink } from "react-router-dom";
import NotFound from "../NotFound";
import Context from "../../context/context";
import MyModal from "../../components/MyModal/MyModal";
import ProductPay from "../products/ProductPay";

const ProductsOne = () => {
  const [error, setError] = useState();
  const { id } = useParams();
  const productCrud = new Crud("product");
  const [product, setProduct] = useState({});
  const [viewSpinner, setViewSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const show = () => {
    setShowModal(true);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    setViewSpinner(true);
    productCrud
      .getOneById(`${id}`)
      .then((res) => {
        setProduct(res.data);
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
      ) : (
        <>
          <MyModal
            visible={showModal}
            onCancel={() => setShowModal(false)}
            closeButtonShow
            title="Оформить заказ"
          >
            <ProductPay
              closeModal={() => setShowModal(false)}
              product={product}
            />
          </MyModal>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <h1 className="mt-5">{product.name}</h1>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a
                  href={`${process.env.REACT_APP_MARMELAD_STORE_API_URL}${product.img}`}
                  target="_blank"
                >
                  <img
                    src={`${process.env.REACT_APP_MARMELAD_STORE_API_URL}${product.img}`}
                    className="card-img-top border border-primary border-1 rounded-top"
                    alt="..."
                    style={{ width: "50%" }}
                  ></img>
                </a>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col text-start">
                <h2>Цена: {product.price} BYN</h2>
              </div>

              <div class="col">
                <button
                  type="submit"
                  className="btn btn-primary m-1"
                  onClick={show}
                >
                  Заказать
                </button>
              </div>
              <div class="col"></div>
            </div>

            <div class="row mt-3 text-wrap text-break text-start">
              <div class="сol">
                <p>{product.description}</p>
                {/* <p>
                  <span class="fw-bold">Партия: </span>
                  {product.party}
                </p> */}
                <p>
                  <span class="fw-bold">Код продукта: </span>
                  {product.productCode}
                </p>
                <p>
                  <span class="fw-bold">Тип продукта: </span>
                  {product.typeProduct}
                </p>
                <p>
                  <span class="fw-bold">Брэнд: </span>
                  {product.brandProduct}
                </p>
              </div>
            </div>

            <h3 className="m-3">Почему стоит есть мармелад?</h3>
            <div class="row">
              <div class="col">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Факт #1
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Процесс приготовления мармелада очень прост – фрукты
                        варят с сахаром до достижения желаемого результата.
                        Появился этот десерт в Малой Азии, откуда во время
                        крестовых походов попал в Западную Европу и долгое время
                        не выходил за её пределы. Сейчас он популярен по всему
                        миру. Вероятнее всего, само слово “мармелад” в переводе
                        с одного из диалектов французского языка означает
                        “хорошо приготовленное яблочное блюдо”.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Факт #2
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Несмотря не вышеупомянутую связь с яблоками, наиболее
                        популярны мармелады из цитрусовых фруктов. В
                        англоговорящих странах до сих пор этим словом означают
                        только продукт, приготовленный именно из цитрусов. Если
                        в качестве сырья использовались другие фрукты, десерт
                        тоже называется иначе.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Факт #3
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Приготовленный из натуральных продуктов мармелад не
                        только вкусен, но и весьма питателен и полезен. В 100
                        граммах содержится около около 10 мг кальция и по 4 мг
                        фосфора и магния. Поэтому в некоторых странах он не
                        только продаётся в качестве десерта, но и входит в
                        состав армейских сухих пайков для солдат и офицеров.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center m-3">
              <div class="col">
                <NavLink to="/products" className="btn btn-primary">
                  К продуктам
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductsOne;
