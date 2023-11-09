import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-green-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <Link to="/">
            <span className="text-green-500">Kobi</span>
            <span className="text-green-700">Estate</span>
          </Link>
        </h1>
        <form className="bg-green-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-4">
            <Link to='/'><li className="hidden sm:inline text-green-700 hover:underline">Home</li></Link>
            <Link to='/about'><li className="hidden sm:inline text-green-700 hover:underline">About</li></Link>
            <Link to='sign-in'><li className=" text-green-700 hover:underline">Sign in</li></Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
