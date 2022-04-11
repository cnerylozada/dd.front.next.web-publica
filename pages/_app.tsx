import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
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
import { Footer, Navbar } from "@/components";
import { languages } from "@/utils";
import "../styles/globals.css";

const WrapperApp = ({ children }: { children: any }) => {
  const [store, dispatch] = useStore();
  const router = useRouter();

  useEffect(() => {
    const ddLng = localStorage.getItem("dd-lng");
    const ddTheme = localStorage.getItem("dd-theme");
    if (!!ddLng) dispatch(setLanguage(ddLng));
    if (!!ddTheme) dispatch(setTheme(ddTheme === "dark"));
  }, []);

  return (
    <div className={`relative ${store.ddIsDarkMode ? "darkPalette" : ""}`}>
      <Head>
        <title>
          {store.ddLanguage === languages.spanish
            ? "Dynamic Devs - Desarrollo de Software e Innovación"
            : "Dynamic Devs - Software Development & Innovation"}
        </title>
        <meta
          name="Description"
          content="Aplicaciones Móviles y Desktop, Blockchain, Inteligencia Artificial y Páginas Web. Creamos sistemas personalizados para tu negocio con un equipo multidisciplinario y metodología ágil."
        />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="author"
          content="César Contreras - Marlis Mejías - Estefanía Ishisaka"
        />
        <meta property="og:url" content="https://www.dynamicdevs.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dynamic Devs - Desarrollo web y Transformación Digital"
        />
        <meta
          property="og:description"
          content="Aplicaciones Móviles y Desktop, Blockchain, Inteligencia Artificial y Páginas Web. Creamos sistemas personalizados para tu negocio con un equipo multidisciplinario y metodología ágil."
        />
        <meta
          property="og:image"
          content="https://assets.dynamicdevs.io/web/logo.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        type="module"
        src="https://sources-dynamic-devs-icons-six.vercel.app/build/dynamic-devs-icons.esm.js"
      />
      <Script
        noModule={true}
        src="https://sources-dynamic-devs-icons-six.vercel.app/build/dynamic-devs-icons.js"
      />
      <DDTheme isDarkMode={store.ddIsDarkMode}>
        <Navbar />
        {children}
        {!router.pathname.includes("[slug]") && <Footer />}
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
