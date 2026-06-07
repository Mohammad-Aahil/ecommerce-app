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
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {(data || []).map((product) => {
          return (
            <div
              className="border p-4 rounded shadow hover:shadow-2xl transition"
              key={product.id}
            >
              <img
                className="h-40 mx-auto"
                src={product.image}
                alt={product.title}
              />
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-green-600 font-bold">₹ {product.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                <Link to={`/products/${product.id}`}>View</Link>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
