import { useQuery } from "@tanstack/react-query";
import React from "react";

const App = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        throw new Error("Failed to fetch the Error");
      }
      return res.json();
    },
  });
  return (
    <div>
      <h1>Products Cart</h1>

      {(data || []).map((product) => {
        return (
          <div key={product.id} className="border my-5 w-50">
            <img src={product.image} alt={product.title} className="w-24 " />
            <h3 className="">
              <strong>Title: </strong>
              {product.title}
            </h3>
            <p>
              <strong>Price: </strong>
              {product.price}
            </p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default App;
