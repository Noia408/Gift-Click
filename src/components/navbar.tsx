'use client'
import { Search, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Profile from "./profile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import React from "react";

export default function Navbar() {
  return(
    <nav className="w-full h-[8vw] bg-white flex flex-col px-[6vw] sticky top-0 z-50">
      <div className="flex items-center justify-between h-[5vw] w-full gap-[1vw] ">
        <Link href={"/"} className="flex items-center h-[90%] w-[7vw] mt-[0.4vw]">
          <Image src={"/asset/icon.png"} className="h-[120%] w-fit object-cover" width={100} height={50} alt="" />
        </Link>
        <form className="h-[70%] w-[80%] border bg-[#eaebed] flex border-[#d7d9db] rounded-xl overflow-hidden">
          <button className="w-[7%] h-full bg-transparent flex justify-center items-center"><Search color="#aeb1b3" /></button>
          <input className="w-[93%] h-full outline-none text-[#202125] flex justify-center bg-transparent" placeholder="Procure Aqui o seu Gift Card!!!" type="text" name="" id="" />
        </form>
        <div className="w-[30vw] h-full flex justify-between items-center gap-[1vw]">
          <Profile/>
          <Link href={"/carrinho"} className="group h-[70%] w-[20%] hover:bg-[#eaebed] duration-300 rounded-xl flex justify-center items-center"><ShoppingBasket size={32} className="text-[#202125] group-focus:text-[#77c555] duration-300" /></Link>
        </div>
      </div>
      <div className="flex h-[3vw] w-full gap-[4vw]">
        <NavigationMenu className="flex gap-[1vw]">
          <Link href="/compra" className="hover:bg-[#eaebed] rounded-xl px-[1vw] h-[100%] flex justify-center items-center">
              Compra
          </Link>
          <NavigationMenuList>
            <NavigationMenuItem className="hover:bg-[#eaebed] rounded-xl">
              <NavigationMenuTrigger className="text-[#202125]">Categorias</NavigationMenuTrigger>
              <NavigationMenuContent className="border-[#d7d9db] overflow-auto">
                <ul className="grid gap-[0.5vw] p-[0.5vw] w-[50vw] grid-cols-3 bg-white z-40">
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Entretenimento</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Jogos e eSports</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Compras</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Educação</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Tecnologia</Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="hover:bg-[#eaebed] rounded-xl">
              <NavigationMenuTrigger className="text-[#202125]">Gift Cards</NavigationMenuTrigger>
              <NavigationMenuContent className="border-[#d7d9db] overflow-auto">
                <ul className="grid gap-[0.5vw] p-[0.5vw] w-[50vw] grid-cols-4 bg-white z-40">
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Google Play</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Apple</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Microsoft</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Adobe</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Netflix</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Steam</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">PLaystation</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Xbox</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Nintedo</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Roblox</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Fortnite</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Spotify</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Free Fire</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">AliExpress</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Udemy</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Alura</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Duolingo Plus</Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="hover:bg-[#eaebed] rounded-xl">
              <NavigationMenuTrigger className="text-[#202125] hover:text-[#202125]">Promoções</NavigationMenuTrigger>
              <NavigationMenuContent className="border-[#d7d9db] overflow-auto">
                <ul className="grid gap-[0.5vw] p-[0.5vw] w-[50vw] grid-cols-3 bg-white z-40">
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Netflix</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Steam</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">PLaystation</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Xbox</Link>
                <Link href={"/"} className="hover:bg-[#eaebed] p-[0.5vw] pl-[1vw] rounded-xl">Nintedo</Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <Link href="/about" className="hover:bg-[#eaebed] rounded-xl px-[1vw] h-[100%] flex justify-center items-center">
              Sobre Nós
          </Link>
          <Link href="/contacts" className="hover:bg-[#eaebed] rounded-xl px-[1vw] h-[100%] flex justify-center items-center">
              Contactos
          </Link>
        </NavigationMenu>
      </div>
    </nav>
  )
}

