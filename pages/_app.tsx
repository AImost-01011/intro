import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../redux/store";
import { Provider } from "react-redux";
import Modal from "react-modal";

function MyApp({ Component, pageProps }: AppProps) {
  Modal.setAppElement("#__next");

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
