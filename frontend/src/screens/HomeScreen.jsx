import { Link } from "react-router-dom";
//import data from "../data/data";
import { useEffect, useState } from "react";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="flex justify-center">
        {products.map((product) => (
          <>
            <div className="w-64 h-96 border border-solid border-black rounded-md p-2 m-2">
              <div className="h-48 flex justify-center items-center">
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} className="p-2" />
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>{product.price}</p>
                <button className="border rounded-md p-2">Add to cart</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
