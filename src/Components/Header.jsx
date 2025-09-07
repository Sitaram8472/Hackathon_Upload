import React, { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "HOME", path: "#home" },
    { label: "TIMELINE", path: "#timeline" },
    { label: "DOMAINS", path: "#domains" },
    { label: "RULES", path: "#rules" },
    { label: "PRIZE", path: "#prize" },
    { label: "SPONSORS", path: "#sponsors" },
    { label: "CONTACT", path: "#contact" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full bg-sky-200 z-50 py-3 shadow-md">
      <div className="flex justify-between items-center px-6 md:px-20">
        {/* Logo or site name */}
        <h1 className="text-xl font-bold text-gray-900">Hackathon</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 bg-white px-8 py-3 rounded-full shadow-sm border border-sky-400 font-bold text-lg">
          {links.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="text-gray-800 transition duration-200 hover:text-sky-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <RiMenu5Fill
            size={30}
            className="text-gray-800 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-800 font-bold text-xl"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-6 mt-10 ml-6">
          {links.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="text-gray-800 font-semibold text-lg hover:text-sky-600"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
