import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { CustomButton } from "../ui/button-library";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const menuItems = ["Home", "About", "Pricing", "Contact"];
  const serviceItems = ["Freelancing", "Project Management", "Talent Sourcing"];

  return (
    <nav className="fixed w-full z-50 bg-[#0B0B1E]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              GigFloww
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium"
              >
                Services ▾
              </button>
              {isServicesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#0F0F2A] rounded-xl border border-white/10 shadow-lg py-1">
                  {serviceItems.map((service) => (
                    <a
                      key={service}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <CustomButton customVariant="gradient" className="ml-4">
              Sign In
            </CustomButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0F0F2A]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
            >
              Services ▾
            </button>
            {isServicesOpen && (
              <div className="pl-4">
                {serviceItems.map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
