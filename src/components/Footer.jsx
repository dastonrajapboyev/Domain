const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 pt-[200px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BIG DATA</h3>
            <p className="text-gray-400 text-sm">
              National Reserve System Of United States Approved
            </p>
            <p className="text-gray-400 text-sm mt-2">All Rights Reserved</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">DATA CENTER</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Web Hosting</li>
              <li>Email Hosting</li>
              <li>Database Server</li>
              <li>Cloud Hosting</li>
              <li>VPS Hosting</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Domain Search</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>New Domain</li>
              <li>Search Domain</li>
              <li>Search AI</li>
              <li>Chat big Gopt</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hello</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Customers</li>
              <li>Support Desks</li>
              <li>Video Tutorials</li>
              <li>Live Chat</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© Made with ❤️</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-blue-400">BIG DATA</span>
              <span className="text-blue-400">WALLET</span>
              <span className="text-blue-400">LICENSE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
