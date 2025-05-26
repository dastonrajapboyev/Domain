import statsIcon from "../../assets/Stats/01.png";

const Stats = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
      <div className="bg-[#f9f9f9] rounded-[30px] sm:rounded-[50px] md:rounded-[100px] p-6 sm:p-8 md:p-12">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-xl font-bold mb-4 leading-tight">
              CONNECT SOCET BIG DATA
            </h2>
            <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              11 278 620
            </div>
            <div className="text-lg sm:text-xl font-bold text-green-500 mb-6">
              ONLINE
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4">
              <img
                src={statsIcon}
                alt="icon"
                className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
              />
              <span className="font-bold text-sm sm:text-base text-center sm:text-left">
                24/7/365 Online
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4">
              <img
                src={statsIcon}
                alt="icon"
                className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
              />
              <span className="font-bold text-sm sm:text-base text-center sm:text-left leading-tight">
                Secure Your Files With Automatic Backups
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div className="text-center flex-1">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              CONNECT SOCET BIG DATA
            </h2>
            <div className="text-4xl lg:text-6xl font-black text-gray-900 mb-3">
              11 278 620
            </div>
            <div className="text-xl lg:text-2xl font-bold text-green-500">
              ONLINE
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-md">
            <div className="flex items-center space-x-4">
              <img
                src={statsIcon}
                alt="icon"
                className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
              />
              <span className="font-bold text-base lg:text-lg">
                24/7/365 Online
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src={statsIcon}
                alt="icon"
                className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
              />
              <span className="font-bold text-base lg:text-lg leading-tight">
                Secure Your Files With Automatic Backups
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
