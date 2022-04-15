import Layout from "../components/layout/layout";

import '../styles/globals.css'
// import "./events-search.modules.css";
import "../components/events/events-search.modules.css";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
      )
}

export default MyApp;
