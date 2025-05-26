import ImageSettings from "../../assets/CTA/01.png";
import ImageChecked from "../../assets/CTA/02.png";
import ImageChecked2 from "../../assets/CTA/02.2.png";
import ImageCenter from "../../assets/CTA/Rectangle.png";
import Star from "../../assets/CTA/star.png";
import Database from "../../assets/CTA/Database.png";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
        QUICK SETUP VPS / VDS
      </h2>
      <h3 className="text-3xl md:text-5xl  text-center mb-12">
        <span className="font-extrabold">Friendly</span> Control Panel
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center  ">
        <div className="text-center">
          <div className="bg-white w-[247px] mx-auto rounded-2xl p-6 mb-4 h-32 flex items-center justify-center gap-2">
            <img src={ImageSettings} alt="image" />
            <div className=" font-bold">FREE CHAT</div>
            <div className="relative">
              <img className="relative" src={ImageChecked} alt="image" />
              <img
                className=" absolute mt-[-22px] ml-1"
                src={ImageChecked2}
                alt="image"
              />
            </div>
          </div>
          <div className="div">
            <h4 className="font-bold text-xl mb-2">ONE-CLICK DEPLOY</h4>
            <p className="text-gray-600 text-sm">
              You Ultimate Tool To Console Deploying/Installing Tasks — Direct
              Site Download Link Deploy Server OS And Watch Your Valuable
              Resources And Rapid Network...
            </p>
          </div>
        </div>

        <div className="text-center">
          <img src={ImageCenter} alt="image" />
        </div>

        <div className="text-center">
          <div className="bg-white  w-[247px] rounded-2xl p-6 mb-4 h-32 flex items-center justify-center gap-2 ">
            <img src={Star} alt="image" />
            <div className="mt-6">
              Real Time <br />
              <span className="font-black">Database</span>
            </div>
            <div className="relative">
              <img className="relative" src={ImageChecked} alt="image" />
              <img
                className=" absolute mt-[-22px] ml-1"
                src={Database}
                alt="image"
              />
            </div>
          </div>
          <h4 className="font-bold text-xl mb-2">We Build The Future</h4>
          <ul className="text-sm text-gray-600 space-y-1 text-left">
            <li>• Natural Code Java GUI CPU AI & for Extreme All Power</li>
            <li>• Multi Server App — Social Media Infrastructure &</li>
            <li>• Gaming Metaverse Era</li>
            <li>• Data Gener — 1 PB DDRAMs Ultra-Fast Storages</li>
            <li>• Ai Chat Gopt</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CTA;
