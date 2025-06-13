import ImageTop from "../../assets/Features/Vector-top.png";
import ImageBottom from "../../assets/Features/Vector-bottom.png";

const Features = () => {
  return (
    <div className="relative ">
      <h2
        style={{ marginTop: "-40px" }}
        className="text-black container__header tracking-[3.1px]  font-black font-syne font-extrabold  capitalize relative z-20 text-right
  text-[28px] leading-[24px] mb-[-20px] pr-4
  sm:text-[40px] sm:leading-[36px] sm:mb-[-30px] sm:pr-6
  md:text-[60px] md:leading-[50px] md:mb-[-50px] md:pr-10
  lg:text-[80px] lg:leading-[65px] lg:mb-[-65px] lg:pr-16
  xl:text-[130px] xl:leading-[77px] xl:mb-[-80px] xl:pr-20">
        SERVER
      </h2>

      <img className="w-full h-auto mt-[-65px]" src={ImageTop} alt="image" />
      <div className="container__header mx-auto mt-[-120px] sm:mt-[-180px] md:mt-[-220px] lg:mt-[-340px]">
        <div
          className="bg-gray-500 rounded-[20px] sm:rounded-[30px] md:rounded-[42px]
          backdrop-blur-sm
          backdrop-blur-[4px]
          bg-white/88
          p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
          <div className="relative z-10">
            {/* Birinchi qator */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                  CPU PLATINUM PROCESSOR
                </h3>
                <div className="flex  sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4 rounded-[50px] sm:rounded-[102px] shadow-[0px_0px_25px_rgba(0,0,0,0.05)] bg-white p-3 sm:p-4">
                  <span className="bg-gradient-to-r from-gray-800 to-gray-700 px-3 sm:px-4 py-2 sm:py-4 rounded-full text-xs sm:text-sm text-white whitespace-nowrap">
                    1 CORE
                  </span>
                  <span className="text-sm sm:text-base">256 GB</span>
                </div>
              </div>

              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                  RAM DDR4 MEMORY
                </h3>
                <div className="flex  sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4 rounded-[50px] sm:rounded-[102px] shadow-[0px_0px_25px_rgba(0,0,0,0.05)] bg-white p-3 sm:p-4">
                  <span className="bg-gradient-to-t from-green-600 to-green-400 text-white px-3 sm:px-6 py-2 sm:py-4 rounded-full text-xs sm:text-sm whitespace-nowrap">
                    1 GB
                  </span>
                  <span className="text-sm sm:text-base">256 GB</span>
                </div>
              </div>

              <div className="p-3 sm:p-4 md:p-6 sm:col-span-2 lg:col-span-1">
                <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                  NVME SSD 16 PB
                </h3>
                <div className="flex  sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4 rounded-[50px] sm:rounded-[102px] shadow-[0px_0px_25px_rgba(0,0,0,0.05)] bg-white p-3 sm:p-4">
                  <span className="bg-gradient-to-t from-gray-800 to-gray-600 text-white px-3 sm:px-6 py-2 sm:py-4 rounded-full text-xs sm:text-sm whitespace-nowrap">
                    8 GB
                  </span>
                  <span className="text-sm sm:text-base">4048 GB</span>
                </div>
              </div>
            </div>

            {/* Ikkinchi qator */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="font-bold mb-2 text-sm sm:text-base">
                  GPU AI • GAME
                </h3>
                <div className="flex sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4 rounded-[50px] sm:rounded-[102px] shadow-[0px_0px_25px_rgba(0,0,0,0.05)] bg-white p-3 sm:p-4">
                  <span className="bg-yellow-500 text-black px-3 sm:px-6 py-2 sm:py-4 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap">
                    1 GB
                  </span>
                  <span className="text-sm sm:text-base">256 GB</span>
                </div>
              </div>

              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="font-bold mb-2 text-sm sm:text-base">15.35</h3>
                <div className="p-2 py-3 sm:py-4 rounded-[50px] sm:rounded-[102px] shadow-[0px_0px_25px_rgba(0,0,0,0.05)] bg-white">
                  <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 sm:py-4 rounded-full font-bold w-full text-xs sm:text-sm hover:bg-blue-700 transition-colors">
                    18.35 USDT / DAY
                  </button>
                </div>
              </div>

              <div className="p-3 sm:p-4 md:p-6 sm:col-span-2 lg:col-span-1">
                <h3 className="font-bold mb-2 text-sm sm:text-base">
                  VPS / VDS
                </h3>
                <div className="flex sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4 rounded-[50px] sm:rounded-[102px] shadow-[0px_0px_25px_rgba(0,0,0,0.05)] bg-white p-3 sm:p-4">
                  <span className="bg-gradient-to-t from-cyan-500 to-cyan-300 text-black px-3 sm:px-4 py-2 sm:py-4 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap">
                    GET
                  </span>
                  <span className="text-sm sm:text-base">256 GB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full h-auto mt-[-80px] sm:mt-[-120px] md:mt-[-150px] lg:mt-[-190px]"
        src={ImageBottom}
        alt="image"
      />
    </div>
  );
};
export default Features;
