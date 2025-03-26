import React, { useState } from "react";
import { BiCart, BiMenu } from "react-icons/bi";
import Footer from "../componts/footer";
import { useNavigate } from "react-router-dom";

const blog = Array(6).fill({
  id: 1,
  title: "Name of Blog #1",
  author: "John K",
  date: "12/6/2024",
  description:
    "Struggle to fall asleep every night? Or do you struggle to STAY asleep — twisting, turning, and waking up a lot all through the night?",
  image: "/Kurla_Nov2_2317 1 (2).png",
  descript:
    "Do you Constantly wake up in the morining feeling tried and fatigued instead of fresh and clear headed like everyone else ?",
  link: "Well , news flash :it's your hormones",
});

function Blog() {
  const navigate = useNavigate();
  localStorage.setItem("data", JSON.stringify(blog));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-start px-6 py-4 bg-[#f2f2f2]">
      <div className="hidden md:flex justify-between items-center w-full max-w-5xl mx-auto px-6 ">
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

      <section className="py-10 px-4 flex-grow">
        <h2 className="text-center text-3xl font-semibold mb-6">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blog.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => navigate(`/single/${blog.id}`, { state: blog })}
            >
              <img
                src={blog.image}
                alt="Blog"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-500">
                    {blog.author} | {blog.date}
                  </p>
                </div>
                <p className="text-gray-700 mt-2">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="block lg:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
