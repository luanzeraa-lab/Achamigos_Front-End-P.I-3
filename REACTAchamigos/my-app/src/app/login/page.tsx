"use client";

import Cadastrar from "@/components/Cadastrar";
import Logar from "@/components/Logar";
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";




const Login = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#ffeccf]">
        <Nav2 />

        <main className="flex-1 flex flex-col">
          <Logar />

          <div className="mt-4 text-center">
            <p id="ou">OU</p>
            <p className="mt-2 font-bold text-2xl">Cadastre-Se</p>
          </div>

          <Cadastrar />
        </main>

        <Footer />
      </div>
    </>
  );
};
export default Login;