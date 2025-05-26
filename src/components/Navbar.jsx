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

// Header Component
export const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-gray-900">BIGGB</div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <span>SERVER</span>
            <span className="w-[16px] h-[16px] bg-black rounded-full"></span>
          </button>

          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <span>DOMAIN</span>
            <span className="w-[16px] h-[16px] bg-black rounded-full"></span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <span>CLOUD</span>
            <span className="w-[16px] h-[16px] bg-black rounded-full"></span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <span>AI +</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <span className="w-[16px] h-[16px] bg-black rounded-full"></span>

            <span>WALLET</span>
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate("login")}
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800">
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
