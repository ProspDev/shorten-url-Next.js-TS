import type { AppProps } from "next/app";
// baseUI
import { Provider as StyletronProvider } from "styletron-react";
// hooks
import { Toaster } from "react-hot-toast";
//
import { styletron } from "../../styletron";
// css
import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StyletronProvider value={styletron}>
      <Component {...pageProps} />
      <Toaster position="top-right" reverseOrder={false} />
    </StyletronProvider>
  );
};

export default MyApp;
