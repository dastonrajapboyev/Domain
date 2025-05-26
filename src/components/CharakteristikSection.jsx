import GridImage1 from "../../assets/Charakteristik/01.png";
import GridImage2 from "../../assets/Charakteristik/02.png";
import GridImage3 from "../../assets/Charakteristik/03.png";
import GridImage4 from "../../assets/Charakteristik/04.png";
import GridImage5 from "../../assets/Charakteristik/05.png";
import GridImage6 from "../../assets/Charakteristik/06.png";
import BlackStar from "../../assets/Charakteristik/BlackStar.png";
import NodeJs from "../../assets/Charakteristik/nodeJs.png";

const CharacteristicsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h2 className="text-sm text-gray-600 mb-2">REALIBLE & QUICK SETUP</h2>
          <h3 className="text-2xl md:text-4xl font-black">CHARACTERISTIC</h3>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <img src={BlackStar} alt="star-icon" />
          <span className="text-2xl font-bold">5.0</span>
          <img src={NodeJs} alt="star-icon" />
        </div>
      </div>

      <div className="flex gap-14 flex-wrap">
        <div
          style={{ rowGap: "40px" }}
          className="grid grid-cols-3 gap-6  mb-8">
          <img src={GridImage1} alt="grid-image" />
          <img src={GridImage2} alt="grid-image" />
          <img src={GridImage3} alt="grid-image" />
          <img src={GridImage4} alt="grid-image" />
          <img src={GridImage5} alt="grid-image" />
          <img src={GridImage6} alt="grid-image" />
        </div>

        <div className=" rounded-xl p-6">
          <div className="flex flex-col gap-14">
            <div>
              <h4 className="font-bold mb-2">CLUSTER</h4>
              <p className="text-gray-600">HIGH SPEED</p>
              <p className="text-gray-600">24/7/365</p>
            </div>
            <div>
              <p className="">CPU Power 128-Core Gold / Platinum Processors</p>
              <p className=""> 512 GB DDR4 ECC Registered RAM •</p>
              <p className="text-gray-600">— 1 o 48 128 TB NVMe SSD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacteristicsSection;
