import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiCart, BiMenu } from "react-icons/bi";

function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-start px-6 py-4 bg-[#f2f2f2]">
      <div className="hidden md:flex justify-between items-center w-[2000px] max-w-5xl mx-auto px-6">
        <div className="cursor-pointer">
          <img
            src="/Group 1000004660 (Traced).png"
            alt="Logo"
            className="h-10"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="text-2xl cursor-pointer">
          <BiCart />
        </div>
      </div>

      <div className="flex md:hidden w-full justify-between items-center">
        <BiMenu className="text-4xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        <img src="/Group 1000004660 (Traced).png" alt="Logo" className="h-10" />
        <BiCart className="text-3xl cursor-pointer" />
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#f2f2f2] shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>Shop</li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>About</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>Contact Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
