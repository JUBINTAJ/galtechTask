import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiCart, BiChevronLeft, BiChevronRight, BiMenu } from "react-icons/bi";
import Footer from '../componts/footer'

function BlogDetails() {
  const { id } = useParams();
  const blogId = parseInt(id);
  const navigate = useNavigate();
  const blogs = JSON.parse(localStorage.getItem('data'));
  const blog = blogs.find((b) => b.id === blogId);
    const [isOpen, setIsOpen] = useState(false);
  

  if (!blog) {
    return <h2 className="text-center text-2xl mt-10">Blog Not Found</h2>;
  }

  return (
    <div>

       <nav className="flex justify-between px-6 py-4 bg-[#f2f2f2]">
           <div className="hidden md:flex justify-between items-center w-screen max-w-5xl mx-auto px-6 ">
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
               <BiMenu
                 className="text-4xl cursor-pointer"
                 onClick={() => setIsOpen(!isOpen)}
               />
               <img
                 src="/Group 1000004660 (Traced).png"
                 alt="Logo"
                 className="h-10"
                 onClick={() => navigate("/")}

               />
               <BiCart className="text-3xl cursor-pointer" />

             </div>
     
             {isOpen && (
               <div className="md:hidden absolute top-20 left-0 w-full bg-[#f2f2f2] shadow-md">
                 <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
                   <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
                     Shop
                   </li>
                   <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
                     About
                   </li>
                   <li className="cursor-pointer" >
                     Blog
                   </li>
                   <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
                     Contact Us
                   </li>
                 </ul>
               </div>
             )}
           </nav>
    <div className="mx-auto text-center flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold">Kurla Blog: the first Blog</h1>
      <h2 className="text-lg sm:text-xl text-black mt-2">Lorem ipsum Dolor Es</h2>

      <p className="text-gray-500 mt-2">
        December 13,2024 <span className="text-gray-500">By: Chino zhou</span>
      </p>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg mx-auto my-6 rounded-lg"
      />
   <div className="w-full max-w-md sm:max-w-lg space-y-6 sm:space-y-14 p-4 flex flex-col text-center items-center">
  <div>{blog.description}</div>
  <div>{blog.descript}</div>
  <div>{blog.link}</div>
</div>


      <div className="flex justify-between w-full max-w-lg sm:max-w-4xl items-center mt-10 px-4 sm:px-0">
        <button
          onClick={() => navigate(`/single/${blogId - 1}`)}
          disabled={blogId === 1}
          className={`flex items-center text-gray-700 ${blogId === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-black"}`}
        >
          <BiChevronLeft className="text-2xl" />
          <span className="text-lg font-bold">Previous</span>
        </button>

        <button
          onClick={() => navigate(`/single/${blogId + 1}`)}
          disabled={blogId === blogs.length}
          className={`flex items-center text-gray-700 ${blogId === blogs.length ? "opacity-50 cursor-not-allowed" : "hover:text-black"}`}
        >
          <span className="text-lg sm:text-xl font-bold">Next</span>
          <BiChevronRight className="text-2xl" />
        </button>
      </div>
      <div className="block lg:hidden mt-10">
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default BlogDetails;
