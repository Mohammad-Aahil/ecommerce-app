import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addCart } = useCart();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!res.ok) {
        throw new Error("Failed to fetch product");
      }

      return res.json();
    },
  });

  if (isLoading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product</p>;

  return (
    <div className="p-6 border rounded shadow">
      <img className="h-60 mx-auto" src={data.image} />
      <h2 className="text-xl font-bold mt-4">{data.title}</h2>
      <p className="text-green-600 font-bold">₹ {data.price}</p>
      <p className="mt-2">{data.description}</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => {
          addCart(data);
        }}
      >
        Add to Cart 🛒
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="mt-4 bg-blue-500 text-white px-5 ml-5 py-2 rounded hover:bg-blue-600"
      >
        {" "}
        Go Back
      </button>{" "}
    </div>
  );
}
