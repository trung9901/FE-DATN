import "../styles/globals.css";
import Layout from "./../components/Layout";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;
