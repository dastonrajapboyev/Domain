const CTASection = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-[-50px] sm:mb-[-80px] md:mb-[-100px] relative z-10">
      <div
        style={{
          boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)",
        }}
        className="bg-black rounded-[30px] sm:rounded-[50px] md:rounded-[100px] p-6 sm:p-8 md:p-12 text-center">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <h2 className="text-2xl font-bold text-white mb-6">
            Sign Up For
            <br />
            <span className="text-yellow-400">Big Data</span>
            <br />
            Today
          </h2>
          <div className="mb-4">
            <div className="text-white text-sm mb-1">Start GB</div>
            <div className="text-white text-xl font-bold mb-4">$ 0.99/Day</div>
            <button
              onClick={() => onNavigate("login")}
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors w-full sm:w-auto">
              CONFIGURATION
            </button>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block md:hidden">
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Sign Up For
              <br />
              <span className="text-yellow-400">Big Data</span>
              <br />
              Today
            </h2>
            <div className="text-center">
              <div className="text-white text-sm mb-1">Start GB</div>
              <div className="text-white text-2xl font-bold mb-4">
                $ 0.99/Day
              </div>
              <button
                onClick={() => onNavigate("login")}
                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                CONFIGURATION
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Sign Up For
            <br />
            <span className="text-yellow-400">Big Data</span>
            <br />
            Today
          </h2>
          <div className="text-left">
            <div className="text-white text-sm mb-1">Start GB</div>
            <div className="text-white text-2xl font-bold mb-4">$ 0.99/Day</div>
            <button
              onClick={() => onNavigate("login")}
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              CONFIGURATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CTASection;
