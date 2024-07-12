import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { ShopContext } from "../context/cart_context";



const AllProductes = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [singleProduct, setSingleProduct] = useState(null);
  const {  addItems } = useContext(ShopContext);
  //const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("Error fetching products:", error);
        setData([]);
      });
  }, []);

  const getSingleProduct = async (productId) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const product = await response.json();
      console.log(product)
      //setSingleProduct(product);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  // add the logic to addtocart fetaure (latter)
  const addToCart = (productId) => {
    addItems(productId); // Call addItems function from context
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10">
      <div className="flex flex-row justify-between mb-2">
        <h1 className="text-xl font-bold">All Products</h1>
        <div className="flex flex-row justify-between mb-2">
          <input
            type="search"
            placeholder="Search product"
            onChange={handleSearchChange}
            value={search}
            className="w-full ml-2 p-3 sm:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <CiSearch className="w-8 h-8 mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-lg shadow-md p-3 flex flex-col"
          >
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <img
              src={product.image}
              alt="Product"
              className="rounded-lg mb-2 h-40 object-contain"
            />
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-green-600 font-bold mb-2">
              Price: ${product.price}
            </p>

            <button
              className="bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-800"
              onClick={() => getSingleProduct(product.id)}
            >
              View Details
            </button>
            <hr className="my-2" />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              onClick={addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pop up the single carts  */}
      {singleProduct && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-white bg-opacity-90 flex justify-center items-center m-5">
          <div className="bg-white p-2 md:p-2 lg:p-8 xl:p-10 rounded-lg shadow-md">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setSingleProduct(null)}
            >
              ❌
            </button>
            <h2 className="text-2xl font-bold mb-2">{singleProduct.title}</h2>
            <img
              src={singleProduct.image}
              alt="Product"
              className="rounded-lg mb-4 h-60 object-contain"
            />
            <p className="text-gray-700 mb-4">{singleProduct.description}</p>
            <p className="text-green-600 font-bold mb-4">
              Price: ${singleProduct.price}
            </p>
            <Link
              to={`/all-products/${singleProduct.id}`}
              className="bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-800"
            >
              More Details
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProductes;
