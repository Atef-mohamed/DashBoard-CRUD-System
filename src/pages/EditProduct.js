import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function EditProduct() {
  const { productID } = useParams();
   const [product, setProduct] = useState();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageLink, setImage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
      });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9000/products/${productID}`, {
        title,
        price,
        description,
        imageLink,
      })
      .then((data) => {
        navigate("/products");
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Product has been Updated",
            showConfirmButton: false,
            timer: 1500
          });
      });
  };
  return (
    <>
      <h1>Edit Product</h1>
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
            value={title}
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
            value={price}
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
            value={description}
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
            value={imageLink}
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

export default EditProduct;
