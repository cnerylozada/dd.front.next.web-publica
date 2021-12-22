import type { AppProps } from "next/app";
import { useEffect } from "react";
import { DDTheme } from "@cnerylozada/dd.front.react.wp.library";
import {
  StoreProvider,
  reducer,
  initialState,
  useStore,
  setTheme,
  setLanguage,
} from "../store";
import { Navbar } from "../components";
import "../styles/globals.css";

const WrapperApp = ({ children }: { children: any }) => {
  const [store, dispatch] = useStore();

  useEffect(() => {
    const ddLng = localStorage.getItem("dd-lng");
    const ddTheme = localStorage.getItem("dd-theme");
    if (!!ddLng) dispatch(setLanguage(ddLng));
    if (!!ddTheme) dispatch(setTheme(ddTheme === "dark"));
  }, []);

  return (
    <div className={`relative ${store.ddIsDarkMode ? "darkPalette" : ""}`}>
      <DDTheme isDarkMode={store.ddIsDarkMode}>
        <Navbar />
        {children}
      </DDTheme>
    </div>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StoreProvider initialState={initialState} reducer={reducer}>
    <WrapperApp>
      <Component {...pageProps} />
    </WrapperApp>
  </StoreProvider>
);

export default MyApp;
