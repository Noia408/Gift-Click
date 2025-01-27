"use client";
import { Search, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Profile from "./profile";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Redireciona com os filtros na URL
    const queryParams = new URLSearchParams();
    if (searchTerm.trim()) queryParams.append("query", searchTerm);
    router.push(`/compra?${queryParams.toString()}`);
  };

  return (
    <nav className="w-full h-[8vw] bg-white flex flex-col px-[6vw] sticky top-0 z-50">
      <div className="flex items-center justify-between h-[5vw] w-full gap-[1vw]">
        <Link href={"/"} className="flex items-center h-[90%] w-[7vw] mt-[0.4vw]">
          <Image
            src={"/asset/icon.png"}
            className="h-[120%] w-fit object-cover"
            width={100}
            height={50}
            alt="Logo"
          />
        </Link>
        {/* Formulário de busca */}
        <form
          onSubmit={handleSearch}
          className="h-[70%] w-[80%] border bg-[#eaebed] flex border-[#d7d9db] rounded-xl overflow-hidden"
        >
          <button
            type="submit"
            className="w-[7%] h-full bg-transparent flex justify-center items-center"
          >
            <Search color="#aeb1b3" />
          </button>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[93%] h-full outline-none text-[#202125] flex justify-center bg-transparent"
            placeholder="Procure Aqui o seu Gift Card!!!"
            type="text"
          />
        </form>
        <div className="w-[30vw] h-full flex justify-between items-center gap-[1vw]">
          <Profile />
          <Link
            href={"/carrinho"}
            className="group h-[70%] w-[20%] hover:bg-[#eaebed] duration-300 rounded-xl flex justify-center items-center"
          >
            <ShoppingBasket
              size={32}
              className="text-[#202125] group-focus:text-[#77c555] duration-300"
            />
          </Link>
        </div>
      </div>
      <div className="flex h-[3vw] w-full gap-[4vw]">
        <div className="flex gap-[1vw]">
          <Link
            href="/compra"
            className="hover:bg-[#eaebed] rounded-xl px-[1vw] h-[100%] flex justify-center items-center"
          >
            Compra
          </Link>
          <Link
            href="/about"
            className="hover:bg-[#eaebed] rounded-xl px-[1vw] h-[100%] flex justify-center items-center"
          >
            Sobre Nós
          </Link>
          <Link
            href="/contacts"
            className="hover:bg-[#eaebed] rounded-xl px-[1vw] h-[100%] flex justify-center items-center"
          >
            Contactos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
