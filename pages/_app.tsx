import type { AppProps } from "next/app";
import { useState } from "react";
import { DDTheme } from "@cnerylozada/dd.front.react.wp.library";
import { Navbar } from "../components";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
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
