import React, { useState } from "react";
import {
  ArrowRight,
  Server,
  Database,
  Cloud,
  Zap,
  Menu,
  X,
} from "lucide-react";
import Logo from "../../assets/Logo.png";

// Header Component
export const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 px-6 py-8">
      <div className="container__header mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-gray-900">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <nav className="hidden ml-4   md:flex gap-2 items-center space-x-6">
          <button className="flex text-xl tracking-wide gap-4 text-lg items-center space-x-1 text-gray-700 hover:text-blue-600">
            <span>SERVER</span>
            <span className="w-[16px] h-[16px] bg-black rounded-full"></span>
          </button>

          <button className="flex text-xl tracking-wide gap-2 text-lg items-center space-x-1 text-gray-700 hover:text-blue-600">
            <span>DOMAIN</span>
            <span className="w-[16px] h-[16px] bg-black rounded-full"></span>
          </button>
          <button className="flex text-xl tracking-wide gap-2 text-lg items-center space-x-1 text-gray-700 hover:text-blue-600">
            <span>CLOUD</span>
            <span className="w-[16px] h-[16px] bg-black rounded-full"></span>
          </button>
          <button className="flex text-xl tracking-wide gap-2 text-lg items-center space-x-1 text-gray-700 hover:text-blue-600">
            <span>AI +</span>
          </button>
          <button className="flex text-xl tracking-wide  gap-2 text-lgx items-center space-x-1 text-gray-700 hover:text-blue-600">
            <span className="w-[16px] h-[16px] bg-black rounded-full"></span>
            <span className="text-lg">WALLET</span>
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate("login")}
            className="bg-black mr-[-4px] text-white w-[281px] px-12 py-4 text-[20px] font-medium leading-[36px] tracking-[2.1px] rounded-full text-sm font-medium hover:bg-gray-800">
            GET FREE 1 DAY
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <nav className="flex flex-col space-y-4">
            <button className="flex items-center space-x-2 text-gray-700">
              <Server size={16} />
              <span>SERVER</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
              <Database size={16} />
              <span>DOMAIN</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
              <Cloud size={16} />
              <span>CLOUD</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
