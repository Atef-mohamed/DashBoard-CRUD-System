import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  let navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/products", {
        title,
        price,
        description,
        image
      })
      .then((data) => {
        navigate("/products");
      });
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Product has been saved",
        showConfirmButton: false,
        timer: 1500
      });
  };
  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={formSubmit} className="container mt-4">
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Product title"
            aria-describedby="Product title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            aria-describedby="Product Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Description
          </label>
          <input
            type="text-area"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            aria-describedby="Product Price"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Image Link
          </label>
          <input
            type="text"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            aria-describedby="Product Price"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
