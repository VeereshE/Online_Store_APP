import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useParams } from "react-router-dom";

const Singleproducts = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const getSingleProductDetials = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const product = await response.json();
        setProduct(product); 
        //console.log(product)
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false); 
      }
    };

    getSingleProductDetials();
  }, [productId]);

 
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", 
          backgroundColor: "#ffffff", 
        }}
      >
        <BallTriangle
          height={100}
          width={100}
          color="#4fa94d" 
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10">
      {product && (
        <div
          key={product.id}
          className="bg-gray-100 rounded-lg shadow-md p-3 flex flex-col"
        >
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <img
            src={product.image}
            alt="Product"
            className="rounded-lg mb-2 h-80 p-2 object-contain"
          />
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-green-600 font-bold mb-2">
            Price: ${product.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default Singleproducts;
