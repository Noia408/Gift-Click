import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer(){
  return(
    <footer className="px-[6vw] w-full h-fit bg-[#eaebed] flex flex-col py-[3vw] gap-[1.2vw]">
      <div className="grid grid-cols-4 gap-[2vw] w-full h-fit">
        <div className="w-full h-full flex flex-col gap-[0.5vw]">
          <h1 className="text-[1.6vw] text-[#202125] font-medium">Categorias</h1>
          <ul className="flex flex-col gap-[0.3vw]">
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Entretenimento</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Jogos e eSports</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Compras</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Educação</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Tecnologia</Link></li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col gap-[0.5vw]">
          <h1 className="text-[1.6vw] text-[#202125] font-medium">Parceiros</h1>
          <ul className="flex flex-col gap-[0.3vw]">
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Programa de Referência</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Programa de Parceria</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Marketing</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Comércio Atacadista</Link></li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col gap-[0.5vw]">
          <h1 className="text-[1.6vw] text-[#202125] font-medium">Empresa</h1>
          <ul className="flex flex-col gap-[0.3vw]">
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Sobre Nós</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Perguntas Frequentes/Ajuda</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Moedas Suportadas</Link></li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col gap-[0.5vw]">
          <h1 className="text-[1.6vw] text-[#202125] font-medium">Informações legais</h1>
          <ul className="flex flex-col gap-[0.3vw]">
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Termos e Condições</Link></li>
            <li><Link href={"/"} className="hover:text-[#77c555] text-[0.9vw] duration-300 text-[#3b3d44]">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[1px] border-[#bcbec0]" />
      <div className="w-full h-fit flex flex-col gap-[0.5vw]">
        <h1 className="text-[1.4vw] text-[#202125] font-medium">Assine ofertas especiais e novidades</h1>
        <div className="w-full h-[3vw] flex items-center gap-[1vw]">
          <form className="h-full w-[30vw] border pl-[1vw] bg-white flex border-[#bcbec0] rounded-xl overflow-hidden">
              <input className="w-full h-full outline-none text-[#202125] flex justify-center bg-transparent" placeholder="Digite o seu E-mail" type="email" name="email" id="email" />
          </form>
          <button className="px-[1vw] h-full hover:bg-[#77c555] bg-green-700 duration-300 text-white rounded-xl">Receber Novidades</button>
        </div>
        <p className="text-[0.9vw] text-[#202125]">Ao se inscrever, você concorda com nossa <Link href={"/"} className="hover:text-[#77c555] duration-300">Política de Privacidade</Link></p>
        <div className="flex w-full h-fit items-center py-[0.5vw] gap-[0.5vw]">
          <Link href={"/"} aria-label="Instagram"><Instagram size={32} className="hover:text-[#77c555] duration-300 text-[#3b3d44]" /></Link>
          <Link href={"/"} aria-label="Facebook"><Facebook size={32} className="hover:text-[#77c555] duration-300 text-[#3b3d44]" /></Link>
          <Link href={"/"} aria-label="Twitter"><Twitter size={32} className="hover:text-[#77c555] duration-300 text-[#3b3d44]" /></Link>
          <Link href={"/"} aria-label="LinkedIn"><Linkedin size={32} className="hover:text-[#77c555] duration-300 text-[#3b3d44]" /></Link>
        </div>
      </div>
      <hr className="w-full h-[1px] border-[#bcbec0]" />
      <p className="text-[0.9vw] text-[#202125]">© 2024 Todos os direitos reservados. <Link href={"/"} className="hover:text-[#77c555] duration-300">Gift Click</Link></p>
    </footer>
  )
}