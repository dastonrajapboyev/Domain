const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Left Section - Title and Search */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8">
            Big Perfect
            <br />
            Data & Domain.
          </h1>

          {/* Search Bar */}
          <div className="flex items-center justify-between bg-white rounded-[50px] sm:rounded-[102px] p-2 sm:p-3 shadow-lg max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0 mb-8">
            <span
              style={{ color: "rgba(0, 0, 0, 0.25)" }}
              className="text-gray-600 pl-3 sm:pl-6 text-sm sm:text-base flex-1">
              DOMAIN.AI
            </span>
            <button className="text-white px-3 sm:px-4 py-1 sm:py-2 rounded-[40px] sm:rounded-[76px] text-xs sm:text-sm bg-gradient-to-r from-[#6756FF] to-[#AFAFFF] hover:brightness-110 transition-all whitespace-nowrap">
              GO!
            </button>
          </div>
        </div>

        {/* Right Section - Domain Pricing */}
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {[
              { ext: ".com", price: "$1.99/month" },
              { ext: ".net", price: "$2.99/month" },
              { ext: ".biz", price: "$1.50/month" },
              { ext: ".co", price: "$12.99/month" },
            ].map((domain, index) => (
              <div
                key={index}
                className="text-center p-3 sm:p-4 md:p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 bg-white">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {domain.ext}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mb-1">
                  Starting price
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                  {domain.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
