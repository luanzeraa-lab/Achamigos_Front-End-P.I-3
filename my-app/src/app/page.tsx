'use client';

import Header from '../components/Header';
import Navbarr from '@/components/Navbarr';
import Main from '../components/Main';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className="bg-[#ffeccf]">
      <Header />
      <Navbarr />
      <Main />
      {/* <Navbarr2/> */}
      <Footer />
    </div>
  );
};

export default App;
