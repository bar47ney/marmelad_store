import React, { useEffect, useState, useContext } from "react";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import "./products.css";
import { useSortedAndSearchedPosts } from "../../hooks/usePosts";
import http from "../../http";
import Context from "../../context/context";
import MyModal from "../../components/MyModal/MyModal";
import ProductAdd from "./ProductAdd";

const Products = ({ main }) => {
  const productsCrud = new Crud("product");
  const [products, setProducts] = useState([]);
  const [viewSpinner, setViewSpinner] = useState(false);
  const [error, setError] = useState();
  // limit=2, page=1, main
  const [sorter, setSorter] = useState(0);
  const [searchQuery, setSearcQuery] = useState("");

  const [searchBrandQuery, setSearcBrandQuery] = useState("");
  const [hiddenPagination, setHiddenPagination] = useState(false);

  const [lengthPages, setLengthPages] = useState(0);
  const pages = [];
  for (let i = 0; i < lengthPages; i++) {
    pages.push(i + 1);
  }

  const [currentPage, setCurrentPage] = useState(0);
  const { state, dispatch } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  const [brand, setBrand] = useState("Коммунарка");

  console.log(lengthPages);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = (page = 1, limit = 6) => {
    setCurrentPage(page);
    setViewSpinner(true);
    if (limit || page) {
      productsCrud
        .get(limit, page)
        .then((res) => {
          setProducts(res.data.rows);
          setLengthPages(Math.ceil(res.data.count / limit));
          setViewSpinner(false);
        })
        .catch((err) => {
          setError(err);
          setViewSpinner(false);
        });
      return;
    }
    productsCrud
      .getAll()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.rows);
        setLengthPages(Math.ceil(res.data.count / limit));
        setViewSpinner(false);
      })
      .catch((err) => {
        setError(err);
        setViewSpinner(false);
      });
  };

  console.log(searchBrandQuery);

  const onSearch = (e) => {
    setSearcQuery(e.target.value);
  };

  const onSearchByBrand = (e) => {
    setSearcBrandQuery(e.target.value);
  };

  const searchByBrand = () => {
    setHiddenPagination(true);
    setViewSpinner(true);
    http
      .get(`http://localhost:5000/api/product/vendor/${brand}`)
      .then((res) => {
        setProducts(res.data);
        console.log(res);
        setViewSpinner(false);
      })
      .catch((e) => {
        alert(e);
        setViewSpinner(false);
      });
  };

  const onSort = (e) => {
    setSorter(+e.target.value);
  };

  const onBrand = (e) => {
    setBrand(e.target.value);
    // e.target.className.
  };

  console.log(brand);
  const sortedAndSearchedPosts = useSortedAndSearchedPosts(
    products,
    sorter,
    searchQuery
  );

  const createNewProduct = () => {
    setShowModal(true);
  };

  return (
    <>
      {viewSpinner ? (
        <Spinner />
      ) : (
        <>
          <MyModal
            visible={showModal}
            onCancel={() => setShowModal(false)}
            closeButtonShow
            title="Добавить товар"
          >
            <ProductAdd closeModal={() => setShowModal(false)} />
          </MyModal>
          <div className="container text-center">
            <h1 className="text-center m-5">Мармелад</h1>
            <div className={`input-group ${main ? "visually-hidden" : ""}`}>
              <span className="input-group-text" id="basic-addon1">
                Поиск
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Поиск по названию"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={onSearch}
              />
            </div>

            <div
              className={`input-group mt-3 ${main ? "visually-hidden" : ""}`}
            >
              <span
                className="input-group-text btn btn-primary"
                id="basic-addon1"
                onClick={() => searchByBrand()}
              >
                Поиск
              </span>
              <select
                className={`form-select ${main ? "visually-hidden" : ""}`}
                aria-label="Default select example"
                onChange={onBrand}
              >
                <option selected>Выберите брэнд (Например, Коммунарка)</option>
                <option selected={brand === "Коммунарка" ? true : false} value="Коммунарка">Коммунарка</option>
                <option selected={brand === "Красный пищевик" ? true : false} value="Красный пищевик">Красный пищевик</option>
                <option selected={brand === "Спартак" ? true : false} value="Спартак">Спартак</option>
              </select>
            </div>
            {/* 111 */}

            {/* 111 */}
            <select
              className={`form-select mt-3 mb-5 ${
                main ? "visually-hidden" : ""
              }`}
              aria-label="Default select example"
              onChange={onSort}
            >
              <option defaultValue value="0">
                Цена по возрастанию
              </option>
              <option value="1">Цена по убыванию</option>
            </select>
            {state.session ? (
              <button
                onClick={() => createNewProduct()}
                className="btn btn-primary btn-m m-3"
              >
                Добавить новый продукт
              </button>
            ) : (
              ""
            )}

            <div className="row">
              {sortedAndSearchedPosts.length ? (
                sortedAndSearchedPosts.map((product, id) => (
                  <div className="col d-flex justify-content-center mb-5 link">
                    <Link to={`/product/${product.id}`}>
                      <div
                        className="card"
                        style={{ width: "20rem" }}
                        key={product.id}
                      >
                        <img
                          src={`${process.env.REACT_APP_MARMELAD_STORE_API_URL}${product.img}`}
                          className="card-img-top"
                          alt="..."
                        ></img>
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Код продукта: {product.productCode}
                          </li>
                          <li className="list-group-item">
                            Брэнд: {product.brandProduct}
                          </li>
                          <li className="list-group-item">
                            {product.price} BYN
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <h3 className="mt-5">Не найдено продуктов</h3>
              )}
            </div>
            <nav aria-label="Page navigation example">
              <ul
                class={`pagination justify-content-center ${
                  main || hiddenPagination ? "visually-hidden" : ""
                }`}
              >
                {pages.map((page) => (
                  <li
                    class={`page-item ${page === currentPage ? "active" : ""}`}
                  >
                    <a
                      class="page-link"
                      href="#"
                      onClick={() => fetchAllProducts(page)}
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
