import React from "react";

const Header = () => {
  const links = [
    { label: "HOME", path: "/home" },
    { label: "TIMELINE", path: "/timeline" },
    { label: "DOMAINS", path: "/domains" },
    { label: "RULES", path: "/rules" },
    { label: "PRIZE", path: "/prize" },
    { label: "SPONSORS", path: "/sponsors" },
    { label: "CONTACT", path: "/contact" },
  ];
  return (
    <div>
      <header className="flex justify-center gap-10 border-dashed border-2 border-sky-500 py-5  m-5 font-bold w">
        {links.map((item, index) => (
          <a href="item.path" key={index}>
            {item.label}
          </a>
        ))}
      </header>
    </div>
  );
};

export default Header;
