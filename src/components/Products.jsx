import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./Product";
export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");

        console.log(data[0]);

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="products">
      {products.length > 0 ? (
        products.map((product) => <Product product={product} key={product} />)
      ) : (
        <h3>Loading ....</h3>
      )}
    </div>
  );
};
