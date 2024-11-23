import Link from "next/link";

export default function Footer(){
  return(
    <footer className="px-[6vw] w-full h-[30vw] bg-[#eaebed] flex flex-col py-[3vw]">
      <div className="grid grid-cols-4 gap-[2vw] w-full h-fit">
        <div className="w-full h-full flex flex-col gap-[0.5vw]">
          <h1 className="text-[2vw] text-[#202125]">Categorias</h1>
          <ul className="flex flex-col">
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Entretenimento</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Jogos e eSports</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Compras</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Restaurantes</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Viagens</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Educação</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Beleza</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Tecnologia</Link></li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col gap-[0.5vw]">
          <h1 className="text-[2vw] text-[#202125]">Parceiros</h1>
          <ul className="flex flex-col">
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Programa de Referência</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Programa de Parceria</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Marketing</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Comércio Atacadista</Link></li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col gap-[0.5vw]">
          <h1 className="text-[2vw] text-[#202125]">Empresa</h1>
          <ul className="flex flex-col">
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Sobre Nós</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Perguntas Frequentes/Ajuda</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Moedas Suportadas</Link></li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col gap-[0.5vw]">
          <h1 className="text-[2vw] text-[#202125]">Informações legais</h1>
          <ul className="flex flex-col">
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Termos e Condições</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] duration-300 text-[#3b3d44]">Política de Privacidade</Link></li>
          </ul>
        </div>
        
      </div>

    </footer>
  )
}