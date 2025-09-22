'use client';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { Button } from './Button';
import Link from 'next/link';

const Nav2 = () => {
  const router = useRouter();
  // Código a ser utilizado para implementação do filtro de busca com API
  const [filtered, setFiltered] = useState<string[]>([]);
  const pages = ['Login', 'Parceiros', 'Informacoes', 'Catalogo'];

  const handleSearch = (value: string) => {
    const results = pages.filter((page) =>
      page.toLowerCase().includes(value.toLowerCase()),
    );
    setFiltered(results);
  };

  return (
    <>
      <nav className="flex flex-row justify-around items-center bg-[#f3f4f6] px-5 py-3">
        <div>
          <Image
            src="/images/logocerto.png"
            alt="logo"
            width={150}
            height={70}
            className="cursor-pointer"
            onClick={() => router.push('/')}
          />
        </div>

        <div>
          <SearchBar placeholder="Procurar" onSearch={handleSearch} />
        </div>

        <div className="flex gap-4 items-center">
          <Link
            href="/"
            className="no-underline p-0 h-fit text-[#0d0d0d] hover:text-[#d9376e] hover:underline underline-offset-1"
          >
            Home
          </Link>

          <Link
            href="/parceiros"
            className="no-underline p-0 h-fit text-[#0d0d0d] hover:text-[#d9376e] hover:underline underline-offset-1"
          >
            Parceiros
          </Link>

          <Link
            href="/catalogo"
            className="no-underline p-0 h-fit text-[#0d0d0d] hover:text-[#d9376e] hover:underline underline-offset-1"
          >
            Catálogo
          </Link>

          <Link
            href="/informacoes"
            className=" no-underline p-0 h-fit text-[#0d0d0d] hover:text-[#d9376e] hover:underline underline-offset-1"
          >
            Informações
          </Link>

          <Button
            title="Login"
            onClick={() => {
              router.push('/login');
            }}
          />
        </div>
      </nav>
    </>
  );
};
export default Nav2;
