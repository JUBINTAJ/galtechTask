export default function TrainEveryBody() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f2f2f2] p-4 sm:p-6 rounded-md">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 md:gap-8 items-center">
        
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-h-[700px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[700px] rounded-3xl overflow-hidden">
            <img
              src="/Screenshot 2025-03-25 122502.png"
              alt="Person exercising with ankle weights"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#444] font-medium">
            TRAIN <span className="italic font-normal">Every</span> BODY PART
          </h1>

          <div className="flex flex-col justify-center md:justify-start gap-4 mt-4">
            <button className="py-3 px-6 sm:py-4 sm:px-8 rounded-full border-2 border-[#a7c0f2] bg-white text-[#444] font-medium hover:bg-[#f5f8ff] transition-colors">
              CORE
            </button>
            <button className="py-3 px-6 sm:py-4 sm:px-8 rounded-full border-2 border-[#a7c0f2] bg-[#c5d4f2] text-[#444] font-medium hover:bg-[#b5c7f0] transition-colors">
              GLUTES
            </button>
            <button className="py-3 px-6 sm:py-4 sm:px-8 rounded-full border-2 border-[#a7c0f2] bg-white text-[#444] font-medium hover:bg-[#f5f8ff] transition-colors">
              ARMS
            </button>
            <button className="py-3 px-6 sm:py-4 sm:px-8 rounded-full border-2 border-[#a7c0f2] bg-white text-[#444] font-medium hover:bg-[#f5f8ff] transition-colors">
              QUADS
            </button>
            <button className="py-3 px-6 sm:py-4 sm:px-8 rounded-full border-2 border-[#a7c0f2] bg-white text-[#444] font-medium hover:bg-[#f5f8ff] transition-colors">
              BACK
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <button className="py-3 px-8 sm:py-3 sm:px-10 rounded-full bg-[#a7c0f2] text-white text-lg font-medium hover:bg-[#96b3ec] transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
