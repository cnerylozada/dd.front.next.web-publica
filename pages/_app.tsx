import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { DDTheme } from "@cnerylozada/dd.front.react.wp.library";
import { Navbar } from "../components";
import "../styles/globals.css";
import { languages } from "../utils";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("dd-lng", languages.english);
  }, []);

  return (
    <div className={`relative ${isDarkMode ? "darkPalette" : ""}`}>
      <DDTheme isDarkMode={isDarkMode}>
        <Navbar setIsDarkMode={setIsDarkMode} />
        <Component {...pageProps} />
      </DDTheme>
    </div>
  );
};

export default MyApp;
