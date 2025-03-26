import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductShowcase() {
  const [selectedSize, setSelectedSize] = useState("MEDIUM");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#8e9ad6] p-4 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-light tracking-wide">LOREM IPSUM</h1>
        <h2 className="text-4xl md:text-5xl font-light tracking-wide">DOLOR ES</h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center"
      >
        <div className="space-y-16 text-right pr-4 hidden md:block">
          <div>
            <h3 className="text-xl font-light italic mb-2">Revolutionary Heel Strap Design:</h3>
            <p className="text-sm">Incorporates a unique heel strap that secures the weight in place at two key touchpoints, providing stability and preventing slipping.</p>
          </div>
          <div>
            <h3 className="text-xl font-light italic mb-2">High-Weight Materials:</h3>
            <p className="text-sm">Durable material that supports weights over 20 lbs, ensuring longevity and stability for intense training.</p>
          </div>
          <div>
            <h3 className="text-xl font-light italic mb-2">Compact & Balanced Design:</h3>
            <p className="text-sm">Creates a compact design that distributes weight evenly to avoid joint imbalance or strain.</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center self-center hidden md:flex"
        >
          <img src="/2@2x.png" alt="Ankle weight product" className="w-64 h-[400px] object-cover" />
        </motion.div>

        <div className="space-y-16 text-left pl-4 hidden md:block">
          <div>
            <h3 className="text-xl font-light italic mb-2">Adjustable Straps:</h3>
            <p className="text-sm">Features adjustable, easy-to-use straps for a custom fit, accommodating various ankle sizes and workout needs.</p>
          </div>
          <div>
            <h3 className="text-xl font-light italic mb-2">Comfort-Enhancing Padding:</h3>
            <p className="text-sm">Adds comfortable padding to prevent chafing and distribute weight evenly around the ankle.</p>
          </div>
          <div>
            <h3 className="text-xl font-light italic mb-2">Breathable Fabric:</h3>
            <p className="text-sm">Uses breathable materials to reduce sweat buildup, enhancing comfort during extended use.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl hidden md:flex flex-wrap justify-center md:justify-between mb-8 px-8 gap-4"
      >
        {["SMALL", "MEDIUM", "LARGE", "X-LARGE"].map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`text-center border border-transparent px-6 py-2 rounded-md text-xl font-light transition-colors ${selectedSize === size ? "text-white font-semibold" : "text-gray-300"}`}
          >
            {size}
            <p className="text-sm">{size === "SMALL" ? "10 lbs" : size === "MEDIUM" ? "20 lbs" : size === "LARGE" ? "30 lbs" : "40 lbs"}</p>
          </button>
        ))}
      </motion.div>

      <motion.button 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="bg-white text-[#8e9ad6] hover:bg-gray-100 rounded-full px-8 py-3 font-medium text-lg hidden md:block"
      >
        SHOP NOW
      </motion.button>
    </div>
  );
}
