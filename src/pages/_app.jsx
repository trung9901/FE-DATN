import "../styles/globals.css";
import LayoutMain from "./../components/Layout";
import "antd/dist/antd.css";
import { SWRConfig } from 'swr';
import instance from '../api/instance';
function MyApp({ Component, pageProps }) {
  const LayoutWrapper = Component.Layout ?? LayoutMain;
  return (
    <div className="max-w-full m-auto">
      <LayoutWrapper>
        <SWRConfig
          value={{
            refreshInterval: 3000,
            fetcher: async (url) => await instance.get(url),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </LayoutWrapper>
    </div>
  );
}

export default MyApp;
