import type { AppProps } from "next/app";
import { DDTheme } from "@cnerylozada/dd.front.react.wp.library";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <DDTheme>
        <Component {...pageProps} />
      </DDTheme>
    </div>
  );
};

export default MyApp;
