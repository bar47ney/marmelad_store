import React, { useEffect, useState, useRef } from "react";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";

const Customers = () => {
  const customersCrud = new Crud("customer");
  const [customers, setCustomers] = useState([]);
  const [viewSpinner, setViewSpinner] = useState(false);

  console.log(customers);

  useEffect(() => {
    fetchAllCustomers();
  }, []);

  const fetchAllCustomers = () => {
    setViewSpinner(true);
    customersCrud.getAll().then((res) => {
      console.log(res.data.rows);
      setCustomers(res.data.rows);
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
              {customers.length ? (
                customers.map((customer, index) => (
                  <tr key={index}>
                    <td>
                    <Link to={`/customers/${customer.id}`}>{customer.id}</Link>
                  </td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
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

export default Customers;
