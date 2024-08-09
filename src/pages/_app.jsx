import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';

import '../app/util/i18n'; // Import the i18n configuration


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;