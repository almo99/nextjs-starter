import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './style.module.scss';

const Layout = ({ children }) => {
  const [direction, setDirection] = useState('rtl');

  return (
    <div className={style.layout} style={{ direction: `${direction}` }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
