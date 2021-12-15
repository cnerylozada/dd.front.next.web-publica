import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { DDTheme } from "@cnerylozada/dd.front.react.wp.library";
import { StoreProvider, reducer, initialState } from "../store";
import { Navbar } from "../components";
import { languages } from "../utils";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("dd-lng", languages.spanish);
  }, []);

  return (
    <div className={`relative ${isDarkMode ? "darkPalette" : ""}`}>
      <StoreProvider initialState={initialState} reducer={reducer}>
        <DDTheme isDarkMode={isDarkMode}>
          <Navbar setIsDarkMode={setIsDarkMode} />
          <Component {...pageProps} />
        </DDTheme>
      </StoreProvider>
    </div>
  );
};

export default MyApp;
