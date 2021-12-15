import React, { useEffect, useState } from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import { useStore, setLanguage } from "../store";
import { languages } from "../utils";

const navLinks = [
  {
    id: 1,
    label_es: "inicio",
    label_en: "home",
  },
  {
    id: 2,
    label_es: "servicios",
    label_en: "services",
  },
];

const navLanguages = [
  { id: 1, label: "sp", value: languages.spanish },
  { id: 2, label: "en", value: languages.english },
];

const Navbar = ({ setIsDarkMode }: { setIsDarkMode: any }) => {
  const [store, dispatch] = useStore();
  const [isSidebarShown, setIsSidebarShown] = useState(false);
  const [currentLng, setCurrentLng] = useState<any>(store.ddLanguage);

  return (
    <div className="z-20 fixed top-0 left-0 w-full text-text">
      <div className="flex justify-between bg-bg2 py-3 px-6">
        <div>▶</div>
        <div>
          <button onClick={() => setIsDarkMode((_: boolean) => !_)}>
            change theme
          </button>
        </div>
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
            onClick={() => setIsDarkMode((_: boolean) => !_)}
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
                {_[`label_${currentLng}`]}
              </DDText>
            ))}
          </div>
          <div className="flex space-x-10" style={{ marginBottom: "90px" }}>
            {navLanguages.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  localStorage.setItem("dd-lng", _.value);
                  setCurrentLng(_.value);
                  dispatch(setLanguage(_.value));
                }}
              >
                <DDText
                  size="sectionHeadline"
                  weight="bold"
                  className={`uppercase ${
                    currentLng === _.value
                      ? "border-b-2 border-b-text"
                      : "border-0"
                  }`}
                >
                  {_.label}
                </DDText>
              </div>
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
