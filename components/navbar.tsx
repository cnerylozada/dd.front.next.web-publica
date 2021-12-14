import React, { useState } from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";

const navLinks = [
  {
    id: 1,
    label: "inicio",
  },
  {
    id: 2,
    label: "servicios",
  },
  {
    id: 3,
    label: "blog",
  },
  {
    id: 4,
    label: "carreras",
  },
  {
    id: 5,
    label: "contacto",
  },
];

const languages = [
  { id: 1, label: "sp" },
  { id: 2, label: "en" },
];

const Navbar = ({ setIsDarkMode }: { setIsDarkMode: any }) => {
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  return (
    <div className="z-20 absolute top-0 left-0 w-full text-text">
      <div className="flex justify-between bg-bg2 py-3 px-6">
        <div>Logo dynamic</div>
        <div onClick={() => setIsSidebarShown((_) => !_)} className="lg:hidden">
          Ξ
        </div>
      </div>
      {isSidebarShown && (
        <div
          className="z-20 fixed top-0 left-0 w-full h-full
          px-9 flex flex-col justify-center bg-bg1"
        >
          <button
            className="block mb-10"
            onClick={() => setIsDarkMode((_) => !_)}
          >
            change theme
          </button>
          <div className="space-y-10 mb-10">
            {navLinks.map((_, index) => (
              <DDText
                key={index}
                size="sectionHeadline"
                weight="bold"
                className="uppercase"
              >
                {_.label}
              </DDText>
            ))}
          </div>
          <div className="flex space-x-10" style={{ marginBottom: "90px" }}>
            {languages.map((_, index) => (
              <DDText
                key={index}
                size="sectionHeadline"
                weight="bold"
                className="uppercase"
              >
                {_.label}
              </DDText>
            ))}
          </div>
          <div onClick={() => setIsSidebarShown(false)} className="mx-auto">
            X
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
