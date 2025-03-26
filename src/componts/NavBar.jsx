import React, { useState } from "react";
import { BiCart, BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleBlog = () => {
    navigate("/Blog");
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#f2f2f2] h-20 relative">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="hidden md:flex justify-between items-center w-full max-w-5xl mx-auto px-6">
          <ul className="flex w-full justify-between items-center text-lg font-bold">
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">About</li>
            <img src="/Group 1000004660 (Traced).png" alt="Logo" className="h-14" />
            <li className="cursor-pointer" onClick={handleBlog}>Blog</li>
            <li className="cursor-pointer">Contact Us</li>
            <BiCart className="text-3xl cursor-pointer" />
          </ul>
        </div>

        <div className="flex md:hidden w-full justify-between items-center">
          <BiMenu className="text-4xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          <img src="/Group 1000004660 (Traced).png" alt="Logo" className="h-10" />
          <BiCart className="text-3xl cursor-pointer" />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#f2f2f2] shadow-md"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
              <li className="cursor-pointer" onClick={() => setIsOpen(false)}>Shop</li>
              <li className="cursor-pointer" onClick={() => setIsOpen(false)}>About</li>
              <li className="cursor-pointer" onClick={handleBlog}>Blog</li>
              <li className="cursor-pointer" onClick={() => setIsOpen(false)}>Contact Us</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
