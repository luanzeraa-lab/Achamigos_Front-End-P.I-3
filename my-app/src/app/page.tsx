'use client';

import Nav2 from '../components/Nav2';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ComoUsar from '../components/ComoUsar';
import '../styles/globals.scss';

const App = () => {
  return (
    <div className="bg-[#fffffe]">
      <Nav2 />
      <Main />
      <ComoUsar />
      <Footer />
    </div>
  );
};

export default App;
