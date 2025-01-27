import Card from "@/components/card";
import { Layers } from "lucide-react";
import Link from "next/link";
import { giftCards } from "../data/model/produto";
import { ft } from "@/utility/formataTexto";

export default function Compra(){
    return(
        <div className="w-full h-fit flex gap-[1vw] pt-[1vw]">
            <div className="h-fit w-[20%] flex flex-col gap-[1vw]">
                <h1 className="text-[2vw] ">Categoria</h1>
                <ul>
                    <li className="h-fit w-full">
                        <Link href={""} className="w-full h-[3.5vw] hover:bg-[#eaebed] duration-300 flex items-center rounded-r-xl pl-[1.5vw] gap-[1vw] border-l-8 hover:border-[#cdced0] border-[#eaebed]">
                            <Layers className="text-green-700" />
                            <span className="text-[1.3vw] text-[#3b3d44]">Todos os Cards</span>
                        </Link>
                    </li>
                    <li className="h-fit w-full">
                        <Link href={""} className="w-full h-[3.5vw] hover:bg-[#eaebed] duration-300 flex items-center rounded-r-xl pl-[1.5vw] gap-[1vw] border-l-8 hover:border-[#cdced0] border-[#eaebed]">
                            <Layers className="text-green-700" />
                            <span className="text-[1.3vw] text-[#3b3d44]">Todos os Cards</span>
                        </Link>
                    </li>
                    <li className="h-fit w-full">
                        <Link href={""} className="w-full h-[3.5vw] hover:bg-[#eaebed] duration-300 flex items-center rounded-r-xl pl-[1.5vw] gap-[1vw] border-l-8 hover:border-[#cdced0] border-[#eaebed]">
                            <Layers className="text-green-700" />
                            <span className="text-[1.3vw] text-[#3b3d44]">Todos os Cards</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="h-fit w-[80%] flex flex-col gap-[1vw]">
                <div className="w-full h-fit flex items-end justify-between">
                    <span className="text-[2.5vw]">Todos os Cards</span>
                    <span>Resultados da pesquisa: 4489</span>
                </div>
                <div className="w-full h-fit grid grid-cols-4 gap-[1vw] mb-[1vw]">
                    {giftCards.map((gift) => (
                        <Card key={gift.nome} capa={gift.imagem} regiao={gift.regiao} categoria={gift.categoria} nome={gift.nome} link={`/produto/${ft(gift.nome)}`}/>
                     ))}
                </div>
            </div>
        </div>
    )
}