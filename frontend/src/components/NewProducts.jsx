import React, { useState, useEffect } from "react";

function NewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") 
      .then((response) => response.json())     
      .then((data) => {
        setProducts(data);        
      })
      .catch((error) => {
        console.log(error);      
      });
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">New Products</h3>

      <div className="row">
        {products.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img
                src={item.image}
                className="card-img-top p-3"
                style={{ height: "220px", objectFit: "contain" }}
              />

              <div className="card-body">
                <h6 className="card-title">
                  {item.title}
                </h6>

                <p className="text-success fw-bold">
                  ₹ {item.price}
                </p>

                <p className="card-text">
                  {item.description.slice(0, 60)}...
                </p>

                <button className="btn btn-primary btn-sm">
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <p className="text-center">No products available</p>
        )}
      </div>
    </div>
  );
}

export default NewProducts;
