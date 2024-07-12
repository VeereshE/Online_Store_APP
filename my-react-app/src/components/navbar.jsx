import React from "react";
import { Link } from "react-router-dom";
import { GoPersonFill } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const NavbarElement = () => {
  
  return (
    <>
      <div className="w-full bg-white p-2 ">
        <div className="text-black text-md font-bold text-center text-sm">
          Special deal available now ✌ Buy now
        </div>
      </div>
      <nav className="w-full bg-blue-200 p-3 flex flex-row justify-between items-center boarder">
        <ul className="flex flex-row gap-3 items-center">
          <li>
            <Link to="/">
              <img
                src="/download-removebg-preview.png"
                alt="logoimg"
                className="w-20 lg:w-30 max-w-full h-auto"
              />
            </Link>
          </li>
          <li>
            <Link
              to="/all-products"
              className="hidden sm:inline-block text-white hover:text-gray-800"
            >
              <h1 className="hidden sm:block font-bold">All Products</h1>
            </Link>
          </li>
          <li>
            <Link
              to="/aboutUs"
              className="hidden sm:inline-block text-white hover:text-gray-800"
            >
              <h1 className="hidden sm:block font-bold">About us</h1>
            </Link>
          </li>
          <li>
            <Link
              to="/contactUs"
              className="hidden sm:inline-block text-white hover:text-gray-800"
            >
              <h1 className="hidden sm:block font-bold">Contact us</h1>
            </Link>
          </li>
        </ul>
        <div className="flex flex-row gap-2 items-center">
          {/* <input
            type="search"
            placeholder="Search product"
            onChange={handleSearchChange}
            value={setSearch}
            className="w-full ml-2 px-2 py-1 sm:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
          /> */}
          <Link
            to="/my-profile"
            className=" sm:inline-block  text-gray-800 hover:text-white"
          >
            <GoPersonFill className="m-1 rounded w-7 h-7" />
          </Link>
          <Link
            to="/addtocarts"
            className=" sm:inline-block text-gray-800 hover:text-white"
          >
            <HiOutlineShoppingBag className="m-1 rounded w-7 h-7" />
          </Link>
        </div>
       
      </nav>
    </>
  );
};

export default NavbarElement;
