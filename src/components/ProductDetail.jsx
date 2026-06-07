import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    <div>
      <h2>{data.title}</h2>
      <img src={data.image} width="150" />
      <p>₹ {data.price}</p>
      <p>{data.description}</p>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        Go Back
      </button>
    </div>
  );
}
