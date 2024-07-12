import React from "react";

const GetCategories = () => {
  const listcategories = [
    { name: "Electronics", image: "/iphone.jpg" },
    { name: "Jewelery", image: "/images123.jpg" },
    { name: "Men's clothing", image: "/Womenclothing.jpg" },
    { name: "Women's clothing", image: "/Menclothing.jpg" },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listcategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={process.env.PUBLIC_URL + category.image}
              alt={category.name}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{category.name}</h2>

              <button
                className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 w-full"
              >See more...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetCategories;
