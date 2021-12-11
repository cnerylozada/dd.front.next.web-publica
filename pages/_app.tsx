import type { AppProps } from "next/app";
import { useState } from "react";
import { DDTheme } from "@cnerylozada/dd.front.react.wp.library";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={` ${isDarkMode ? "darkPalette" : ""}`}>
      <button onClick={() => setIsDarkMode((_) => !_)}>Change Theme</button>

      <DDTheme isDarkMode={isDarkMode}>
        <Component {...pageProps} />
      </DDTheme>
    </div>
  );
};

export default MyApp;
