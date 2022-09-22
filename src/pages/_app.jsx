import "../styles/globals.css";
import LayoutMain from "./../components/Layout";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  const LayoutWrapper = Component.Layout ?? LayoutMain;
  return (
    <div className="max-w-full m-auto">
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </div>
  );
}

export default MyApp;
