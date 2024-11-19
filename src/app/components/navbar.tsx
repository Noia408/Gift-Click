import { Search, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Profile from "./profile";

export default function Navbar() {
  return(
    <nav className="w-full h-[8vw] bg-white flex flex-col overflow-hidden">
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
          <Link href={""} className="group h-[70%] w-[20%] hover:bg-[#eaebed] duration-300 rounded-xl flex justify-center items-center"><ShoppingBasket size={32} className="text-[#202125] group-focus:text-[#77c555] duration-300" /></Link>
        </div>
      </div>
      <div className="flex h-[3vw] w-full gap-[4vw]">

      </div>
    </nav>
  )
}