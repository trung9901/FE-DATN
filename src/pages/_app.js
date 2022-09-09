import "../styles/globals.css";
import Layout from "./../components/Layout";
function MyApp({ Component, pageProps }) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;
