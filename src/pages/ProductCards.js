import { useEffect, useState } from "react";
import Productcard from './Productcard'; 
function ProductCards() {
  const api_url = "http://localhost:9000/products";
  const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
//   const getCategories = () => {
//     fetch(`${api_url}/categories`)
//       .then((res) => res.json())
//       .then((data) => setCategories(data));
//   };
//   const getProductInCategory = (catName) => {
//     fetch(`${api_url}/category/${catName}`)
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   };
  useEffect(() => {
    getProducts();
    console.log(products);
    // getCategories();
  }, []);
  return (
    <>
      <h2 className="text-center p-3 mt-3">Our Product</h2>
      <div className="container">
         {/* <div className="d-flex justify-content-center flex-wrap">
          <button className="btn btn-info m-3" onClick={() => getProducts()}>
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                className="btn btn-info m-3 "
                onClick={() => {
                  getProductInCategory(cat);
                }}
                key={cat}
              >
                {cat}
              </button>
            );
          })} 
        </div> */}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <Productcard product={product} key={product.id} showBtn={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductCards;
