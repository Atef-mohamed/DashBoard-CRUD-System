import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const deletePoduct = (product) => {
    Swal.fire({
      title: `Are You Sure To Delete ${product.title}?`,
      icon: "warning",
      confirmButtonColor: "#3085d6",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            getAllProducts();
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <h1 className="text-center mt-3">Products Page</h1>
      <Link to={"/products/add"} className="btn btn-success  d-flex justify-content-center w-25">
        Add New Product
      </Link>
      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr key="">
            <th>ID</th>
            <th>Title</th>
            {/* <th>Description</th> */}
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                {/* <td>
                  {product.description}
                  ...
                </td> */}
                <td>${product.price}</td>
                <td >
                  <div className="d-flex flex-wrap justify-content-evenly">
                    <button 
                      className="btn btn-danger btn-sm ml-4"
                      onClick={() => deletePoduct(product)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-info btn-sm ml-4"
                    >
                      View
                    </Link>
                    <Link
                      to={`/products/edit/${product.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Edit
                    </Link>
                  </div>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
