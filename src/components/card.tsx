import Image from "next/image";
import Link from "next/link";

interface CardProps {
  capa: string
  nome: string
  categoria: string
  regiao: string
  link?: string
}

export default function Card({capa, nome, categoria, regiao, link=""}:CardProps){
  return(
    <div className="w-full h-[15.5vw] bg-white rounded-xl overflow-hidden shadow-sm border border-[#d7d9db] hover:scale-90 duration-300">
      <Link href={link} className="w-full h-full flex flex-col">
        <div className="w-full h-[65%] bg-black relative">
          <Image className="w-[110%] h-full object-" src={capa} alt="" height={1080} width={1920}/>
          <div className="w-fit h-fit py-[0.2vw] px-[0.3vw] bg-[#ef4444] rounded-xl text-white absolute flex justify-center items-center right-[5%] top-[8%]">{categoria}</div>
        </div>
        <div className="w-full h-[35%] flex flex-col gap-[0.3vw] px-[1vw] py-[0.5vw] relative">
          <span className="text-[#3b3d44] text-[1.5vw]">{nome}</span>
          <div className="flex gap-[0.3vw]">
            <span className="tex-[1vw]">Conta:</span>
            <span className="tex-[1vw] text-[#77c555]">{regiao}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}