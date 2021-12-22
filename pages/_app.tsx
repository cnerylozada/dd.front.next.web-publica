import type { AppProps } from "next/app";
import { useEffect } from "react";
import { DDTheme } from "@cnerylozada/dd.front.react.wp.library";
import { StoreProvider, reducer, initialState, useStore } from "../store";
import { Navbar } from "../components";
import { languages } from "../utils";
import "../styles/globals.css";

const WrapperApp = ({ children }: { children: any }) => {
  const [store] = useStore();

  return (
    <div className={`relative ${store.ddIsDarkMode ? "darkPalette" : ""}`}>
      <DDTheme isDarkMode={store.ddIsDarkMode}>
        <Navbar />
        {children}
      </DDTheme>
    </div>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    localStorage.setItem("dd-lng", languages.spanish);
    localStorage.setItem("dd-theme", "light");
  }, []);

  return (
    <StoreProvider initialState={initialState} reducer={reducer}>
      <WrapperApp>
        <Component {...pageProps} />
      </WrapperApp>
    </StoreProvider>
  );
};

export default MyApp;
