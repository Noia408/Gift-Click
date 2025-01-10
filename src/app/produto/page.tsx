import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Image from "next/image";
import { CreditCard, Heart, ShoppingBasket } from "lucide-react";

export default function Produto(){
    return(
        <div className="w-full h-fit flex flex-col gap-[3vw] pt-[1vw]">
            <div className="w-full h-fit flex rounded-xl border border-[#d7d9db] p-[2vw] gap-[2vw]">
                <div className="w-[35%] h-fit">
                    <div className="bg-black w-full h-[18.3vw] rounded-xl overflow-hidden">
                        <Image className="w-full h-fit object-cover" src={"/asset/Google Play.jpg"} alt="" height={1080} width={1920}/>
                    </div>
                </div>
                <div className="w-[65%] h-fit flex flex-col gap-[0.8vw]">
                    <div className="flex justify-between h-fit w-full">
                        <span className="text-[2.2vw]">Gift Card Google Play</span>
                        <button className="bg-[#d7d9db] focus:[#3b3d44] py-[0.1vw] px-[0.5vw] rounded-xl flex gap-[0.2vw] justify-center items-center"><Heart className="" size={20} /> 100</button>
                    </div>
                    <span className="text-[0.9vw] text-justify text-[#3b3d44]">O Google Play é a plataforma de entretenimento do Google que oferece músicas, filmes, livros e aplicativos para dispositivos Android. É a loja oficial de aplicativos do sistema operacional Android, onde os usuários podem navegar e baixar aplicativos desenvolvidos usando o Android SDK e publicados pelo Google. Os clientes podem comprar cartões-presente do Google Play na CoinGate para criptomoeda. Também aceitamos cartões de crédito/débito Visa e Mastercard!</span>
                    <div className="w-full h-fit flex flex-col gap-[0.5vw]">
                        <span className="text-[1.2vw]">Região</span>
                        <Select>
                            <SelectTrigger className="w-full h-[3.5vw] rounded-xl border border-[#d7d9db] px-[1vw]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent className="bg-white px-[1vw] w-[96%]">
                                <SelectGroup>
                                <SelectItem className="p-[0.5vw]" value="apple">Apple</SelectItem>
                                <SelectItem className="p-[0.5vw]" value="banana">Banana</SelectItem>
                                <SelectItem className="p-[0.5vw]" value="blueberry">Blueberry</SelectItem>
                                <SelectItem className="p-[0.5vw]" value="grapes">Grapes</SelectItem>
                                <SelectItem className="p-[0.5vw]" value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-[0.5vw]">
                        <span className="text-[1.2vw]">Preço</span>
                        <Select>
                            <SelectTrigger className="w-full h-[3.5vw] rounded-xl border border-[#d7d9db] px-[1vw]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent className="bg-white px-[1vw] w-[96%]">
                                <SelectGroup>
                                <SelectItem className="p-[0.5vw]" value="apple">Apple</SelectItem>
                                <SelectItem className="p-[0.5vw]" value="banana">Banana</SelectItem>
                                <SelectItem className="p-[0.5vw]" value="blueberry">Blueberry</SelectItem>
                                <SelectItem className="p-[0.5vw]" value="grapes">Grapes</SelectItem>
                                <SelectItem className="p-[0.5vw]" value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <span className="text-[2.0vw]">5.000 kz</span>
                    <div className="w-full h-[4vw] flex gap-[0.5vw]">
                        <Link href={"\carrinho"} className="h-full w-[4vw] bg-[#ef4444] rounded-l-xl flex items-center justify-center text-white text-[1.5vw]"><ShoppingBasket /></Link>
                        <button className="bg-green-700 hover:bg-[#77c555] duration-300 h-full w-[20vw] rounded-r-xl text-white text-[1.5vw] flex items-center justify-center gap-[0.5vw]"><CreditCard /> Comprar Agora</button>
                    </div>

                </div>

            </div>

        </div>
    )
}