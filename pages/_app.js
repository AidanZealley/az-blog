import { Layout } from '@components/Layout';
import { config } from '@utils/config';
import '../styles/index.css';

const MyApp = ({ Component, pageProps }) => {
  const { navLinks } = config;

  return (
    <Layout navLinks={navLinks}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp