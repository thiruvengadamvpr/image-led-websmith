
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-primary font-bold text-2xl">BANKBRIDGE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Product</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Company</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Feature</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Product</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Company</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Feature</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
