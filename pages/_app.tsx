import "../styles/globals.css";
import { GridContextProvider } from "react-grid-dnd";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
