import Layout from '../components/Layout';
import { wrapper } from '../redux/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '../stylesheets/main.scss';

const App = ({ Component, pageProps }) => {
  const store = useStore((state) => state);

  return (
    <PersistGate persistor={store.__persistor} loading={<div>loading</div>}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  );
};

export default wrapper.withRedux(App);
