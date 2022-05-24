import React, { useEffect, useState, useRef } from "react";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";

const Products = () => {
  const productsCrud = new Crud("product");
  const [products, setProducts] = useState([]);
  const [viewSpinner, setViewSpinner] = useState(false);

  console.log(products);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = () => {
    setViewSpinner(true);
    productsCrud.getAll().then((res) => {
      console.log(res.data.rows);
      setProducts(res.data.rows);
      setViewSpinner(false);
    });
  };

  return (
    <>
      {viewSpinner ? (
        <Spinner />
      ) : (
        <>
        <h1 className="text-center m-3">Мармелад</h1>
        <div className="container p-3">
          <div className="row">
            {products.map((product, id) => (
              <div
                className="card m-3"
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
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{product.name}</li>
                  <li className="list-group-item">{product.productCode}</li>
                  <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                  <Link to={`/product/${product.id}`}>{product.id}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default Products;
