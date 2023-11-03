import React, { useEffect, useState } from "react";
import { baseURL } from "../Util/constant";
import axios from "axios";


const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

 

  const handleLogout = async (e) => {
    navigate("/login");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/v1/product/getP`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <br />

      {products.map((product) => (
            <li key={product._id} className="bg-white shadow-lg rounded-lg">
              <div className="p-6">
                <h2 className="text-xl f">{product.name}</h2>
                <p className=" text-base ">{product.desc}</p>
                <p className=" text-xl ">
                  ${product.price}
                </p>
                
              </div>
            </li>
          ))}
      <button
        title="Save"
        class="cursor-pointer flex items-center fill-red-400 bg-red-950 hover:bg-red-900 mt-9 active:border active:border-red-400 rounded-md duration-100 p-2"
        onClick={handleLogout}
      >
        <span class="text-sm text-red-400 font-bold pr-1">Logout</span>
      </button>

      
    </div>
  );
};

export default Home;
