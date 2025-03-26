import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#A1ACDF] py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-8 sm:text-left">
          <div>
            <div className="text-2xl font-bold mb-8">
              <img src="/Group 1000004660 (Traced).png" alt="Logo" />
            </div>
            <h3 className="text-2xl font-bold mb-4">LET'S LIFT TOGETHER!</h3>
            <p className="text-sm mb-4">
              Join our mailing list & save up to 10% on your next order!
            </p>
            <div className="flex justify-start">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none bg-white"
              />
              <button className="bg-gray-700 text-white px-4 py-2 rounded-r-lg">
                →
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gray-900">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-900">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-900">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Kurla
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Soon
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Guarantee
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <p className="text-sm">© 2024 Kurla</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <img src="/image 15.png" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
