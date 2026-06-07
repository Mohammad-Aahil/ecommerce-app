import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function ProductsList() {
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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch the data from API</p>;

  /* Rendering Data */
  return (
    <div>
      {(data || []).map((product) => {
        return (
          <div key={product.id} className="border my-5 w-50">
            <img src={product.image} alt={product.title} className="w-24 " />

            <Link to={`/products/${product.id}`}>
              <h3 className="">{product.title}</h3>
            </Link>
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
}
