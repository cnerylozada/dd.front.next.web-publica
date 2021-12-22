import React, { useState } from "react";
import Link from "next/link";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import { useStore, setTheme } from "../store";
import { navLinks } from "../utils";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [store, dispatch] = useStore();
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  return (
    <div className="z-20 fixed top-0 left-0 w-full text-text">
      <div className="py-3 px-5 flex justify-between items-center bg-bg2">
        <div>▶</div>
        <div className="hidden lg:flex space-x-10 text-text">
          <button
            onClick={() => {
              const newTheme: boolean = !store.ddIsDarkMode;
              localStorage.setItem("dd-theme", newTheme ? "dark" : "light");
              dispatch(setTheme(newTheme));
            }}
          >
            change theme
          </button>
          {navLinks.map((_, index) => (
            <Link key={index} href={`/${_.path}`}>
              <a className="block">
                <DDText weight="light" className="capitalize">
                  {_[`label_${store.ddLanguage}`]}
                </DDText>
              </a>
            </Link>
          ))}
        </div>
        <div onClick={() => setIsSidebarShown((_) => !_)} className="lg:hidden">
          Ξ
        </div>
      </div>
      {isSidebarShown && <Sidebar setIsSidebarShown={setIsSidebarShown} />}
    </div>
  );
};

export default Navbar;
