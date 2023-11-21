import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './productDetials.css';
function ProductDetails() {
  const [product, setProduct] = useState();

  const { productID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);
  return (
    product && (
      <>
        <div className="card card-de">
        <img src={product.image} className="card-img-top img-details" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="fw-bold text-secondary text-center">
            Price: {product.price}$
          </p>
        </div>
      </div>
      </>
    )
  );
}
export default ProductDetails;
