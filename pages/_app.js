import Header from "../components/Layout/Header";
import { CartProvider } from "react-use-cart";
import "../styles/globals.css";
import Footer from "../components/Layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer/>
      </CartProvider>
    </>
  );
}

export default MyApp;
