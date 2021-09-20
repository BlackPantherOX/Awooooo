import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-full font-sans">
      <Header />

      <main className="main">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}

export default MyApp;
