'use client';

import Header from '../components/Header';
import Navbarr from '@/components/Navbarr';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../styles/globals.scss'

const App = () => {
  return (
    <div className="bg-[#fffffe]">
      <Header />
      <Navbarr />
      <Main />
      {/* <Navbarr2/> */}
      <Footer />
    </div>
  );
};

export default App;
