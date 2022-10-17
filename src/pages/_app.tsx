import "styles/globals.scss";
import Layout from "layout/Layout";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
