import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const Nav = () => {
  return (
    <nav className=" flex border-b-2 border-[#f3f3f3] justify-around items-center p-5 z-50 ml-8">
      <div className="nav-container ">
        <input
          type="text"
          placeholder="Enter your search.."
          className="search-input p-3 bg-[#f7f6f6] outline-0 mr-5 rounded-md relative w-[14rem]"
        />
      </div>
      <div className="profile-container flex">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
          
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
