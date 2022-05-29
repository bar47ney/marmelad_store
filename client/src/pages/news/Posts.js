import React, { useEffect, useState, useRef } from "react";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { useSortedAndSearchedPosts } from "../../hooks/usePosts";

const Posts = ({ main }) => {
  const productsCrud = new Crud("news");
  const [products, setProducts] = useState([]);
  const [viewSpinner, setViewSpinner] = useState(false);
  const [error, setError] = useState();
  const [sorter, setSorter] = useState(0);
  const [searchQuery, setSearcQuery] = useState("");

  const [lengthPages, setLengthPages] = useState(0);
  const pages = [];
  for (let i = 0; i < lengthPages; i++) {
    pages.push(i + 1);
  }

  const [currentPage, setCurrentPage] = useState(0);

  console.log(lengthPages);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = (page = 1, limit = 3) => {
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

  const onSearch = (e) => {
    setSearcQuery(e.target.value);
  };

  const onSort = (e) => {
    setSorter(+e.target.value);
  };

  const sortedAndSearchedPosts = useSortedAndSearchedPosts(
    products,
    sorter,
    searchQuery
  );

  return (
    <>
      {viewSpinner ? (
        <Spinner />
      ) : (
        <>
          <div className="container text-center">
            <h1 className="text-center m-5">Новости</h1>

            <div className="row">
              {sortedAndSearchedPosts.length ? (
                sortedAndSearchedPosts.map((product, id) => (
                  <div className="col d-flex justify-content-center mb-5 link">
                    <Link to={`/news/${product.id}`}>
                      <div
                        className="card"
                        style={{ width: "20rem" }}
                        key={product.id}
                      >
                        <img
                          src={`${process.env.REACT_APP_MARMELAD_STORE_API_URL}${product.image}`}
                          className="card-img-top"
                          alt="..."
                        ></img>
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Тема: {product.theme}
                          </li>
                          <li className="list-group-item">
                            Автор: {product.author}
                          </li><li className="list-group-item">
                            Создано: {product.createdAt}
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
                  main ? "visually-hidden" : ""
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

export default Posts;
