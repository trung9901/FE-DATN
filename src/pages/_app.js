import "../styles/globals.css";
import LayoutMain from "./../components/Layout";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  const LayoutWrapper = Component.Layout ?? LayoutMain;
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;
