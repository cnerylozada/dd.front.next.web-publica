import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStore, setTheme } from "../store";
import {
  DDLogo,
  DDText,
  DDToggle,
  DDIcon,
} from "@cnerylozada/dd.front.react.wp.library";
import { SelectLanguage } from "./select-language";
import Sidebar from "./sidebar";
import { navLinks } from "@/utils";

const Navbar = () => {
  const router = useRouter();
  const [store, dispatch] = useStore();
  const { query } = useRouter();
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  return (
    <div className="z-20 fixed top-0 left-0 w-full text-text">
      <div className="pr-5 flex justify-between items-center bg-bg2">
        <DDLogo
          type={`${
            query?.category
              ? (query.category as
                  | "classic"
                  | "accelerator-approach"
                  | "build-and-integrate"
                  | "make-it-live"
                  | "dynamic-culture")
              : "classic"
          }`}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="hidden lg:flex items-center space-x-10 text-text">
          {/* <DDToggle
            checked={store.ddIsDarkMode}
            onClick={() => {
              const newTheme: boolean = !store.ddIsDarkMode;
              localStorage.setItem("dd-theme", newTheme ? "dark" : "light");
              dispatch(setTheme(newTheme));
            }}
          /> */}
          {navLinks.map((_, index) => (
            <Link key={index} href={`/${_.path}`}>
              <a className="block">
                <DDText weight="light" className="capitalize">
                  {_[`label_${store.ddLanguage}`]}
                </DDText>
              </a>
            </Link>
          ))}
          <SelectLanguage currentLng={store.ddLanguage} />
        </div>
        <div onClick={() => setIsSidebarShown((_) => !_)} className="lg:hidden">
          <DDIcon name="menu" />
        </div>
      </div>
      {isSidebarShown && <Sidebar setIsSidebarShown={setIsSidebarShown} />}
    </div>
  );
};

export default Navbar;
