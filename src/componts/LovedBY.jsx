import { Star, CheckCircle } from "lucide-react";

export default function TestimonialCarousel() {
  return (
    <div className="w-full bg-[#e9e9e9]">
      <div className="text-center py-10 px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#4a4e5a]">LOVED BY</h2>
        <p className="text-4xl md:text-5xl italic font-normal text-[#4a4e5a]">Thousands</p>
      </div>

      <div className="w-full overflow-x-auto pb-8 scrollb">
        <div className="flex gap-4 px-4 min-w-max">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="w-[300px] bg-white rounded-md overflow-hidden shadow-sm flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src="/Kurla_Nov2_2317 1.png"
                  alt="Person exercising with ankle weights"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow items-center">
                <div className="flex text-[#a7b4e0] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#a7b4e0]" />
                  ))}
                </div>

                <h3 className={`text-xl font-semibold mb-2 ${item === 3 ? "font-normal" : "italic"}`}>
                  Super Convenient
                </h3>
                <p className="text-sm mb-4 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget nulla
                  facilisi. A scelerisque purus semper eget.
                </p>

                <div className="flex items-center gap-10 justify-between mt-auto">
                  <p className="font-semibold">Andrew C</p>
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Verified Customer
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pb-12 px-4">
        <button className="bg-[#4a4e5a] hover:bg-[#3a3e48] text-white rounded-md py-4 px-10 text-xl w-full max-w-md">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
