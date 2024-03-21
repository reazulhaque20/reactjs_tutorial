import { useEffect, useState } from "react";
import Client from "./client";

export default function GetData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Client.get("/products").then((response) => {
      setProducts(response.data.products);
    });
  });

  return (
    <div className="app">
      <h2>All Products</h2>
      {products.map((product) => {
        return (
          <div className="post-card" key={product.id}>
            <h2 className="post-title">{product.title}</h2>
            <p className="post-body">{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}
