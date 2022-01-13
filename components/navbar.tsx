import React, { useState } from "react";
import Link from "next/link";
import {
  DDLogo,
  DDText,
  DDToggle,
} from "@cnerylozada/dd.front.react.wp.library";
import { useStore, setTheme } from "../store";
import Sidebar from "./sidebar";
import { navLinks } from "@/utils";

const Navbar = () => {
  const [store, dispatch] = useStore();
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  return (
    <div className="z-20 fixed top-0 left-0 w-full text-text">
      <div className="pr-5 flex justify-between items-center bg-bg2">
        <DDLogo />
        <div className="hidden lg:flex space-x-10 text-text">
          <DDToggle
            checked={store.ddIsDarkMode}
            onClick={() => {
              const newTheme: boolean = !store.ddIsDarkMode;
              localStorage.setItem("dd-theme", newTheme ? "dark" : "light");
              dispatch(setTheme(newTheme));
            }}
          />
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
