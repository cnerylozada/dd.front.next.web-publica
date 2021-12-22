import React from "react";
import Link from "next/link";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import { useStore, setLanguage, setTheme } from "../store";
import { navLinks, navLanguages } from "../utils";

const Sidebar = ({ setIsSidebarShown }: { setIsSidebarShown: any }) => {
  const [store, dispatch] = useStore();

  return (
    <div
      className="z-20 fixed top-0 left-0 w-full h-full
  px-9 flex flex-col justify-center bg-bg1"
    >
      <button
        className="block mb-10"
        onClick={() => {
          const newTheme: boolean = !store.ddIsDarkMode;
          localStorage.setItem("dd-theme", newTheme ? "dark" : "light");
          dispatch(setTheme(newTheme));
        }}
      >
        change theme
      </button>
      <div className="space-y-10 mb-10">
        {navLinks.map((_, index) => (
          <Link key={index} href={`/${_.path}`}>
            <a className="block" onClick={() => setIsSidebarShown(false)}>
              <DDText
                size="sectionHeadline"
                weight="bold"
                className="uppercase"
              >
                {_[`label_${store.ddLanguage}`]}
              </DDText>
            </a>
          </Link>
        ))}
      </div>
      <div className="flex space-x-10" style={{ marginBottom: "90px" }}>
        {navLanguages.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              localStorage.setItem("dd-lng", _.value);
              dispatch(setLanguage(_.value));
            }}
          >
            <DDText
              size="sectionHeadline"
              weight="bold"
              className={`uppercase ${
                store.ddLanguage === _.value
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
  );
};

export default Sidebar;
